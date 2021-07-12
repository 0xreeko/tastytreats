import React from "react";

function InquiryCard({ name, email, message, subscription }) {
  return (
    <div className="inquiry-card shadow-sm w-96 border-l-4 rounded-sm border-red-200 bg-white">
      <div className="p-3 flex flex-col">
        <span className="text-xl font-extrabold">{name}</span>
        <span className="">Email: {email}</span>
        <span className="">Message: {message}</span>
        <span className="">Subscription: {subscription ? "YES" : "NO"}</span>
      </div>
    </div>
  );
}

export default InquiryCard;
