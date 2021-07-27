import React from "react";
import "./MyFooter.css";

const MyFooter = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© CHAVI GARG &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default MyFooter;