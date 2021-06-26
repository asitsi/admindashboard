import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Img from "../Image/Message.png";
import KeyboardArrowRightSharpIcon from "@material-ui/icons/KeyboardArrowRightSharp";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import { user } from "../Pages/helper/api";

const Sidebar = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(8);
  const getData = async () => {
    const value = await user();
    setData(value.reverse());
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrap>
      <div className="image-container">
        <p>Hello John Bayer You have 8 New Applications Today!</p>
        <img src={Img} alt="Img" className="img-fluid" />
      </div>
      <Content>
        <Head>
          <div>
            <h6>New Applicants</h6>
          </div>
          <div>
            <KeyboardArrowRightSharpIcon />
          </div>
        </Head>
        {data
          .slice(0, limit ? limit : data.length)
          .map((currentElement, index) => {
            return (
              <Data key={index}>
                <Centerdiv>
                  <div>
                    <AccountCircleSharpIcon />
                  </div>
                  <div>
                    <p>{currentElement.name}</p>
                    <p className="discription">
                      Applied for<span> @{currentElement.applicationfor}</span>
                    </p>
                  </div>
                </Centerdiv>
                <Icons>
                  <span>
                    <a href={"mailto:" + currentElement.email}>
                      <EmailIcon className="Icon" />
                    </a>
                  </span>
                  <span>
                    <a href={"tel:" + currentElement.phone}>
                      <CallIcon className="Icon" />
                    </a>
                  </span>
                </Icons>
              </Data>
            );
          })}
      </Content>
    </Wrap>
  );
};

export default Sidebar;

const Wrap = styled.div`
  border: 4px solid rgba(51, 51, 51, 0.6);
  box-shadow: 0 0 10px rgba(51, 51, 51, 0.6);
  height: 100%;
  .image-container {
    p {
      text-align: center;
      font-size: 12px;
      color: #999;
      padding-top: 1rem;
    }
    img {
      padding: 0 10px;
    }
  }
`;

const Content = styled.div`
  background-color: #333;
  color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  top: -10px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
`;
const Data = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 1rem;
  line-height: 8px;
  p {
    margin-left: 10px;
  }
  .discription {
    font-size: 10px;
    line-height: 1px;
    span {
      color: #12a4d9;
    }
  }
`;

const Centerdiv = styled.div`
  display: flex;
`;
const Icons = styled.div`
  margin-top: 10px;
  span {
    background-color: #444;
    color: #777;
    border-radius: 50%;
    margin-left: 1rem;
    padding: 5px;
    .Icon {
      font-size: 1rem;
      color: #999;
    }
  }
`;
