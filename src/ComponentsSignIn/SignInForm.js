import React, { useState, useRef, createRef } from "react";
import axios from "axios";
import InputField from "./InputField";
import { Link } from "react-router-dom";

function SignInForm() {
  const inputRefs = React.useRef([React.createRef(), React.createRef()]);

  const [data, setData] = React.useState({});

  const handleChange = (name, value) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    let isValid = true;

    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      console.log(valid);

      if (!valid) {
        isValid = false;
      }
    }

    if (!isValid) {
      return;
    }

    axios
      .post("/login", {
        phone: data.phone,
        password: data.password,
      })
      .then((response) => {
        console.log(response.data.token);
        const token = response.data.token;
        localStorage.setItem("Token", token);
        if (response.status == 200) alert("Sign in successful");
      })
      .catch((err) => {
        console.log(data);
        console.log(err, err.response);
      });
  };

  return (
    <div className="formBox">
      <h2 className="formHeading"> Sign in </h2>

      <form onSubmit={submitForm} className="form">
        <InputField
          ref={inputRefs.current[0]}
          type="number"
          name="phone"
          label="Phone"
          validation={"required|min:6|max:128"}
          onChange={handleChange}
        />{" "}
        <InputField
          ref={inputRefs.current[1]}
          type="password"
          name="password"
          label="Password"
          validation={"required|min:6|max:128"}
          onChange={handleChange}
        />
        <button type="submit"> Continue </button>{" "}
      </form>
      <a className="createAcctxt" id="otp ">
        Sign in via OTP
      </a>
      <p className="createAcctxt">
        Don't have an account?{" "}
        <Link to="/sign-up" id="create">
          Create
        </Link>
      </p>
    </div>
  );
}

export default SignInForm;
