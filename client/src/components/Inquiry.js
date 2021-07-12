import React from "react";
import InquiryCard from "./InquiryCard";

function Inquiry() {
  let data = [
    {
      name: "Enrique",
      email: "enrict@email.com",
      message: "im an alien",
      subscription: true,
    },
  ];

  return (
    <div className="inquiry bg-yellow-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl text-center m-3">Inquiry List</h1>
      {data.map((e) => (
        <InquiryCard
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
