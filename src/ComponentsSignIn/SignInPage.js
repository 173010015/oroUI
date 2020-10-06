import React from "react";
import logo from "../ComponentsLandingPage/images/orologonew11.ico";
import SignInForm from "./SignInForm";

function SignInPage() {
  return (
    <div>
      <div className="signInPageContainer">
        <div className="Box">
          <SignInForm></SignInForm>
        </div>
        
        <div className="leftBox Box">
          <img className="signInLogo" src={logo} style={{ height: "4rem" }} />
          <svg data-name="Layer 1" viewBox="80 50 400 800" className="test">
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#302794", stopOpacity: "0.5" }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#471261", stopOpacity: "1" }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#2d0b3d", stopOpacity: "1" }}
                />
              </linearGradient>
            </defs>
            <path
              d="M 50 50 C 50 150 150 150 150 250 Q 150 350 250 400 C 345 450 250 550 350 600 L 600 600 C 600 500 500 500 500 400 C 500 300 400 350 400 250 C 400 100 300 150 300 50 Z"
              fill="url(#wave1)"
            ></path>
          </svg>
          <h2 className="signInheading">Welcome to</h2>
          <h1 className="signInheading2">OnRoadOut</h1>
          <p className="signInheading3">
            Mauris porttitor ex sit amet nulla vulputate dapibus
          </p>
          <div id="circle1SignIn"></div>
          <div id="circle2SignIn"></div>
          <div id="circle3SignIn"></div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
