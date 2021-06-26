import React from "react";
import styled from "styled-components";
import ProgressBar from "./Charts/ProgressBar";

const ProgressCard = () => {
  return (
    <Wrap>
      <h6>Total Applications</h6>
      <ul>
        <li>
          <div className="row">
            <div className="col-6">Applications</div>
            <div className="col-6 style">
              <ProgressBar width="50%" color="#a2d5c6" />
            </div>
          </div>
        </li>
        <li>
          <div className="row">
            <div className="col-6">Short Listed</div>
            <div className="col-6 style">
              <ProgressBar width="80%" color="#12a4d9" />
            </div>
          </div>
        </li>
        <li>
          <div className="row">
            <div className="col-6">Accepted</div>
            <div className="col-6 style">
              <ProgressBar width="40%" color="#f54242" />
            </div>
          </div>
        </li>
        <li>
          <div className="row">
            <div className="col-6">On Hold</div>
            <div className="col-6 style">
              <ProgressBar width="20%" color="#6b7b8c" />
            </div>
          </div>
        </li>
        <li>
          <div className="row">
            <div className="col-6">Selected</div>
            <div className="col-6 style">
              <ProgressBar width="70%" color="#5c3c92" className="" />
            </div>
          </div>
        </li>
      </ul>
    </Wrap>
  );
};

export default ProgressCard;

const Wrap = styled.div`
  border: 4px solid rgba(51, 51, 51, 0.6);
  box-shadow: 0 0 10px rgba(51, 51, 51, 0.6);
  border-radius: 20px;
  padding: 1rem 0rem 0rem 1rem;
  min-width: 300px;
  min-height: fit-content;
  width: 100%;
  h6 {
    color: #999;
  }
  ul {
    padding: 0rem 1rem;
  }
  li {
    margin: 1.1rem 0;
    font-size: 14px;
  }
  .style {
    margin-top: 0.7rem;
  }
  li:nth-child(1) {
    color: #a2d5c6;
  }
  li:nth-child(2) {
    color: #12a4d9;
  }
  li:nth-child(3) {
    color: #f54242;
  }
  li:nth-child(4) {
    color: #6b7b8c;
  }
  li:nth-child(5) {
    color: #5c3c92;
  }
`;
