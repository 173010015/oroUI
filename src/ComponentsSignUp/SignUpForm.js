import React from "react";
import logo from "../ComponentsLandingPage/images/orologonew11.ico";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function SignUpForm() {
  const classes = useStyles();
  return (
    <div>
      <div className="signUpPageContainer">
        <div className="leftBox Box">
          
            <svg
              className="wave-sign-up"
              data-name="Layer 1"
              viewBox="80 50 400 800"
            >
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
                className="wave-sign-up"
                fill="url(#wave1)"
              ></path>
            </svg>
          

          {/* <svg viewBox="100 -200 1500 10" width="1200" height="1000"className="wave1">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(255,255,0)", stopOpacity: "1" }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(255,0,0)", stopOpacity: "1" }}
                />
              </linearGradient>
            </defs>{" "}
            <path
              fill="url(#grad1)"
              fill-opacity="1"
              d="M0,96L30,80C60,64,120,32,180,42.7C240,53,300,107,360,144C420,181,480,203,540,186.7C600,171,660,117,720,96C780,75,840,85,900,112C960,139,1020,181,1080,181.3C1140,181,1200,139,1260,106.7C1320,75,1380,53,1410,42.7L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg> */}
        </div>
        <div className="Box">
          <div className="formBox">
            <h2>
              Welcome to ORO, <br />
              Sign up to continue.
            </h2>
            <img className="signUpLogo" src={logo} style={{ height: "4rem" }} />

            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField id="standard-basic" label="Username" />
              </div>
              <div>
                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
