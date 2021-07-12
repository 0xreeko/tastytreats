import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header flex items-center justify-center">
      <div className="flex justify-around bg-red-400 w-full p-2.5">
        <Link to="/">
          <span>Contact Form</span>
        </Link>
        <Link to="/inquiries">
          <span>Inquiry List</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
