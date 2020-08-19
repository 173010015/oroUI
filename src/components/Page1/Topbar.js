import React from "react";
import logo from "./logo.ico";
function Topbar() {
  return (
    <div className="topbar">
      <img id="logo" src={logo} />
      <div id="optionContainer">
        <button className="topbarOption">About</button>
        <button className="topbarOption">Services</button>
        <button className="topbarOption"> Contact Us</button>
        <button className="topbarOption start">Start Now</button>
      </div>
    </div>
  );
}

export default Topbar;
