import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Wrap>
        <h1>Home</h1>
        <p>** Please Signin for Admin Dashboard **</p>
      </Wrap>
    </div>
  );
};

export default Home;

const Wrap = styled.div`
  height: 88vh;
  display: grid;
  place-items: center;
  background-color: #5c3c92;
  h1 {
    color: #fff;
  }
  p {
    color: #fff;
    font-size: 2rem;
  }
`;
