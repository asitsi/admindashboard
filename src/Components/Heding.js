import React from "react";
import styled from "styled-components";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AddIcon from "@material-ui/icons/Add";

const Heding = (props) => {
  const date = new Date().toLocaleString();
  return (
    <Wrap>
      <Header>
        <h5>Dashboard</h5>
        <p>
          Monday<span>{date}</span>
        </p>
      </Header>
      <div>
        <br />
        <div className="divrightPosition">
          <Profile>
            <span>
              <NotificationsIcon />
            </span>
            <span>John Bayer</span>
            <span>
              <img
                src="https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_960_720.jpg"
                alt="IMG"
                classname="img-fluid"
              />
            </span>
            <span>
              <ArrowDropDownIcon />
            </span>
          </Profile>
          <Item>
            <span>
              <Button>
                <AddIcon className="Icon" /> Add
              </Button>
            </span>
            <span>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </span>
          </Item>
        </div>
      </div>
    </Wrap>
  );
};

export default Heding;

const Wrap = styled.div`
  display: flex;
  padding: 1rem 2rem;
  .divrightPosition {
    position: absolute;
    right: 0;
    top: 15px;
  }
`;

const Header = styled.div`
  h5 {
    color: #b4b4b4;
  }
  p {
    color: #b4b4b4;
    span {
      color: #3e4095;
      font-size: 12px;
      margin-left: 0.5rem;
    }
  }
`;

const Profile = styled.div`
  text-align: end;
  color: #b4b4b4;
  margin-right: 1rem;
  span:nth-child(2) {
    margin-left: 10px;
    font-size: 14px;
  }
  span img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin: 0 10px;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  margin-top: 1rem;
  input {
    margin-left: 10px;
    background: transparent;
    color: #444;
    border: 1px solid #333;
  }
`;
const Button = styled.div`
  background: #12a4d9;
  padding: 9px 9px;
  color: #fff;
  font-size: 12px;
  border-radius: 5px;
  .Icon {
    font-size: 14px;
    color: #fff;
  }
`;
