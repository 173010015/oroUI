import React from "react";
import logo from "../ComponentsLandingPage/images/orologonew11.ico";
function SignUpForm() {
  return (
    <div>
      <div className="formBox">
        <h3>
          Welcome to ORO, <br />
          Sign up to continue.
        </h3>
        <img className="signUpLogo" src={logo} />
        <input></input>
      </div>
    </div>
  );
}

export default SignUpForm;
