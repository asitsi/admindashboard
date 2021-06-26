import React from "react";
import styled from "styled-components";
import Doughnutchart from "./Charts/Doughnutcart";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
const DonutChartCard = () => {
  return (
    <Wrap>
      <Header>
        <div>
          <h6>Open Positions By Department</h6>
        </div>
        <div>
          <MoreHorizIcon />
        </div>
      </Header>
      <Doughnutchart className="chart_center" />
    </Wrap>
  );
};

export default DonutChartCard;
const Wrap = styled.div`
  border: 4px solid rgba(51, 51, 51, 0.6);
  box-shadow: 0 0 10px rgba(51, 51, 51, 0.6);
  border-radius: 20px;
  height: fit-content;
  width: 100%;
  padding: 0rem 1rem;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: #999;
  padding: 0.8rem;
`;
