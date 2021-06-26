import React from "react";
import styled from "styled-components";
import CallMadeOutlinedIcon from "@material-ui/icons/CallMadeOutlined";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";
const Campaing = () => {
  return (
    <Wrap>
      <Header>
        <div>
          <h6>Referals and Campaing</h6>
        </div>
        <SubHeader>
          <div>
            <NearMeOutlinedIcon className="Icon" />
          </div>
          <Heading>
            <span>40 Compaigns sent in total</span>
            <span>4 Compaigns sent in last month</span>
          </Heading>
        </SubHeader>
      </Header>
      <ItenBox>
        <div>
          <p>User's Reached</p>
          <p>
            <CallMadeOutlinedIcon className="Icon2" />
            <span>+3.59%</span>
          </p>
          <h6>7956</h6>
        </div>
        <div>
          <p>Referals</p>
          <p>
            <CallMadeOutlinedIcon className="Icon2" />
            <span>+9.01%</span>
          </p>
          <h6>0662</h6>
        </div>
        <div>
          <p>Share</p>
          <p>
            <CallMadeOutlinedIcon className="Icon2" />
            <span>+39.18%</span>
          </p>
          <h6>1478</h6>
        </div>
        <div>
          <p>Applications</p>
          <p>
            <CallMadeOutlinedIcon className="Icon2" />
            <span>+13.00%</span>
          </p>
          <h6>0564</h6>
        </div>
      </ItenBox>
      <ButtonItem>
        <Button color="#12a4d9">Start a New Campaing now</Button>
        <Button color="#f54242">Pause All Running Campaing</Button>
      </ButtonItem>
    </Wrap>
  );
};

export default Campaing;

const Wrap = styled.div`
  border: 4px solid rgba(51, 51, 51, 0.6);
  box-shadow: 0 0 10px rgba(51, 51, 51, 0.6);
  border-radius: 20px;
  min-width: 600px;
  min-height: fit-content;
  margin-left: 1.3rem;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: #999;
  padding: 1rem;
`;
const SubHeader = styled.div`
  display: flex;
  .Icon {
    margin-top: 0.7rem;
    font-size: 1.8rem;
    color: #f54242;
    margin-right: 1rem;
  }
`;
const Heading = styled.div`
  span:nth-child(1) {
    color: #f54242;
    font-size: 14px;
  }
  span:nth-child(2) {
    display: block;
    font-size: 13px;
  }
`;
const ItenBox = styled.div`
  display: flex;
  justify-content: space-around;
  color: #999;
  text-align: center;

  div {
    border-right: 4px solid rgba(51, 51, 51, 0.4);
    padding: 0rem 2rem 0rem 0rem;
    P:nth-child(2) {
      color: #12a4d9;
      span {
        font-size: 12px;
      }
    }
    p {
      font-size: 14px;
      .Icon2 {
        font-size: 16px;
      }
    }
    h6 {
      font-size: 22px;
    }
  }
`;

const ButtonItem = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 0.6rem;
`;
const Button = styled.div`
  padding: 8px 32px;
  background-color: ${(props) => props.color};
  color: #fff;
  font-size: 12px;
`;
