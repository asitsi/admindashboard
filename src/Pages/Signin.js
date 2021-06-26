import React, { useState } from "react";
import styled from "styled-components";
import { signin, authenticate, isAutheticated } from "./helper/api";
import Navbar from "../Components/Navbar/Navbar";
import { Redirect } from "react-router-dom";

const Signin = () => {
  const [values, setValues] = useState({
    email: "Admin@gmail.com",
    password: "Admin",
    error: "",
    loading: false,
    success: false,
    didRedirect: false,
  });
  const { email, password, error, loading, success, didRedirect } = values;
  const { user } = isAutheticated();
  console.log(isAutheticated().user);

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, success: true, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({
            ...values,
            error: data.error,
            success: false,
            loading: false,
          });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              success: true,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };
  const performRedirect = () => {
    //TODO: do a redirect here
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/signup" />;
      }
    }
  };
  const successMessage = () => {
    return (
      <div className="">
        <div className="">
          <div style={{ display: success ? "" : "none" }}></div>
        </div>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div className="">
        <div className="">
          <div style={{ display: error ? "" : "none" }}>
            <h1>error</h1>
          </div>
        </div>
      </div>
    );
  };
  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const signInForm = () => {
    return (
      <Wrap>
        <div className="">
          <form>
            <h2>WELCOME</h2>
            <div className="form-group">
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
                placeholder="Password"
              />
            </div>
            <button onClick={onSubmit} className="submit_btn btn-block">
              Signin
            </button>
            <p>** Please Signin for Admin Dashboard **</p>
          </form>
        </div>
      </Wrap>
    );
  };

  return (
    <div>
      <Navbar />
      {loadingMessage()}
      {errorMessage()}
      {successMessage()}
      {signInForm()}
      {performRedirect()}
    </div>
  );
};

export default Signin;

const Wrap = styled.div`
  height: 88vh;
  display: grid;
  place-items: center;
  background-color: #5c3c92;
  z-index: 1;
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
