import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const { inquiriesDB } = require("../fakeData");
const { siteKey } = require("../config");

function ContactForm() {
  const { validateFormInput } = require("../validators");

  const [isTitle, setTitle] = useState(false);
  const [isVerified, setVerified] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sub, setSubs] = useState(true);
  const { errors, valid } = validateFormInput(name, email, message);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  function save(e) {
    e.preventDefault();

    if (!valid && isTitle) {
      // console.log(errors);
      const errList = JSON.stringify(Object.values(errors));

      alert(`Errors: ${errList}`);
    } else {
      let dataEntry = {
        id: inquiriesDB.length + 1,
        name,
        email,
        message,
        sub,
        createdAt: new Date().toISOString(),
      };

      inquiriesDB.unshift(dataEntry);
      // console.log(inquiriesDB);
      setVerified(false);
      setTitle(false);
    }
  }
  return (
    <div className="contact-form bg-yellow-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl text-center m-3">Contact Form</h1>
      <div className="w-96">
        <form
          name="inqForm"
          action="/"
          method="post"
          className="flex flex-col space-y-3"
        >
          <input
            type="text"
            name="title"
            className="rounded"
            hidden={true}
            onChange={(e) => setTitle(true)}
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            className="rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            name="message"
            className="rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex items-center space-x-3">
            <label htmlFor="subscription">
              Subscribe to Tasty Treats newsletter?
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="subscription"
                value={sub}
                onChange={(e) => setSubs(e.target.value)}
              />
            </div>
          </div>
          <ReCAPTCHA sitekey={siteKey} onChange={onChange} />
          <button
            className="bg-green-500 rounded-md p-3 text-white font-bold"
            onClick={save}
            disabled={!isVerified}
          >
            {" "}
            Submit
          </button>
        </form>
        <div className="text-red-600 font-semibold mt-3"></div>
      </div>
    </div>
  );
}

export default ContactForm;
