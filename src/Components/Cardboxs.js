import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CallMadeOutlinedIcon from "@material-ui/icons/CallMadeOutlined";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import CurcalProgressBar from "./Charts/CurcalProgressBar";
import { user } from "../Pages/helper/api";

const Cardboxs = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const value = await user();

    setData(value.length - 1);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Wrap>
        <MainContent>
          <Header>
            <div>
              <h6>Total Applications</h6>
            </div>
            <div>
              <MoreHorizIcon />
            </div>
          </Header>
          <Content>
            <div>
              <h6>{data}</h6>
              <span>
                <CallMadeOutlinedIcon className="Icon2" /> +39.18%
              </span>
            </div>
            <div>
              <CurcalProgressBar color="#5c3c92" fill="70" />
            </div>
          </Content>
        </MainContent>

        <MainContent>
          <div className="effectCard">
            <Header>
              <div>
                <h6>Shortlisted Candidate</h6>
              </div>
              <div>
                <MoreHorizIcon />
              </div>
            </Header>
            <Content>
              <div>
                <h6>4658</h6>
                <span>
                  <CallMadeOutlinedIcon className="Icon2" /> +06%
                </span>
              </div>
              <div>
                <CurcalProgressBar color="#fff" fill="60" />
              </div>
            </Content>
          </div>
        </MainContent>

        <MainContent>
          <Header>
            <div>
              <h6>Total Applications</h6>
            </div>
            <div>
              <MoreHorizIcon />
            </div>
          </Header>
          <Content>
            <div>
              <h6>1501</h6>
              <span>
                <CallReceivedIcon className="Icon2" /> - 04%
              </span>
            </div>
            <div>
              <CurcalProgressBar color="#f54242" fill="40" />
            </div>
          </Content>
        </MainContent>
      </Wrap>
    </div>
  );
};

export default Cardboxs;

const Wrap = styled.div`
  display: flex;
  justify-content: start;
  margin-left: 1.3rem;
  @media (max-width: 768px) {
    display: block;
    margin: 1rem 0;
  }
`;

const MainContent = styled.div`
  border: 4px solid rgba(51, 51, 51, 0.6);
  box-shadow: 0 0 10px rgba(51, 51, 51, 0.6);
  border-radius: 20px;
  width: 400px;
  padding: 0.5rem 2rem;

  :nth-child(2) {
    border: 4px solid rgba(51, 51, 51, 0.6);
    padding: 0rem 0rem;
    margin: 0 1.5rem 0 1rem;

    .effectCard {
      background-color: #12a4d9;
      width: 300px;
      border: 4px solid rgba(51, 51, 51, 0.6);
      box-shadow: 0 0 10px rgba(51, 51, 51, 0.6);
      border-radius: 20px;
      padding: 0.5rem 2rem;
      position: relative;
      top: 1rem;
      left: 1rem;
    }
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 0.8rem 0;
  h6 {
    font-size: 22px;
    margin-top: 7px;
  }
  span {
    color: #5c3c92;
    font-size: 14px;
    .Icon2 {
      font-size: 16px;
    }
  }
`;
