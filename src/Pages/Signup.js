import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { signup } from "./helper/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Components/Navbar/Navbar";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    error: "",
    success: false,
  });

  const { name, email, password, age, phone, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password, age, phone })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            age: "",
            phone: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <Wrap className="">
        <div className="register_form">
          <form className="">
            <h2>Sign up</h2>
            <div className="form-group">
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                onChange={handleChange("age")}
                type="text"
                value={age}
                placeholder="Age"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                onChange={handleChange("phone")}
                type="text"
                value={phone}
                placeholder="Phone-Number"
              />
            </div>

            <button onClick={onSubmit} className="submit_btn btn-block">
              Signup
            </button>
            <p>** No need to signup it is a dummy page **</p>
          </form>
        </div>
      </Wrap>
    );
  };

  const successMessage = () => {
    toast.success(
      "🦄 waoo.. !New account was created successfully. please login..!!",
      {
        position: "top-center",
      }
    );
    return (
      <div className="">
        <div className="">
          <div style={{ display: success ? "" : "none" }}></div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    toast.error(
      { error },
      {
        position: "top-center",
        closeOnClick: true,
        pauseOnHover: true,
      }
    );
    return (
      <div className="">
        <div className="">
          <div style={{ display: error ? "" : "none" }}>
            <ToastContainer />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </div>
  );
};

export default Signup;

const Wrap = styled.div`
  height: 88vh;
  display: grid;
  place-items: center;
  background-color: #5c3c92;
  h2 {
    color: #fff;
  }
  .form-control {
    margin: 1rem 0;
  }
  .submit_btn {
    padding: 10px 30px;
    color: #fff;
    background-color: transparent;
    border: 1px solid #fff;
  }
  p {
    color: #fff;
    font-size: 2rem;
  }
`;
