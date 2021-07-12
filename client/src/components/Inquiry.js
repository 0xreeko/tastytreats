import React from "react";
import InquiryCard from "./InquiryCard";
const { inquiriesDB } = require("../fakeData");

function Inquiry() {
  return (
    // maps dummy data over card component
    <div className="inquiry bg-yellow-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl text-center m-3">Inquiry List</h1>
      {inquiriesDB.map((e) => (
        <InquiryCard
          key={e.id}
          name={e.name}
          email={e.email}
          message={e.message}
          subscription={e.subscription}
        />
      ))}
    </div>
  );
}

export default Inquiry;
