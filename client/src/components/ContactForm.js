import React from "react";

function ContactForm() {
  return (
    <div className="contact-form bg-yellow-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl text-center m-3">Contact Form</h1>
      <div className="w-96">
        <form action="" method="post" className="flex flex-col space-y-3">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="rounded" />
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" className="rounded" />
          <label htmlFor="message">Message</label>
          <textarea type="text" name="message" className="rounded" />
          <div className="flex items-center space-x-3">
            <label htmlFor="checker">
              Subscribe to Tasty Treats newsletter?
            </label>
            <input type="checkbox" />
          </div>
          <button className="bg-green-500 rounded-md p-3 text-white font-bold">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
