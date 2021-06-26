import React from "react";
import styled from "styled-components";
import Heading from "../Components/Heding";
import Cardboxs from "../Components/Cardboxs";
import DonutChartCard from "../Components/DonutChartCard";
import ProgressCard from "../Components/ProgressCard";
import Campaing from "../Components/Campaing";
import AreaChart from "../Components/Charts/AreaChart";
import Sidebar from "../Components/Sidebar";
import RightNav from "../Components/RightNav/RightNav";

const AdminDashboard = () => {
  return (
    <Wrap>
      <div>
        <RightNav />
      </div>
      <MainContent>
        <div className="div1">
          <Heading />
        </div>
        <div className="div2">
          <Cardboxs />
        </div>
        <div className="div5">
          <Sidebar />
        </div>
        <div className="div6">
          <AreaChart />
        </div>
        <div className="div7">
          <ProgressCard />
        </div>
        <div className="div8">
          <Campaing />
        </div>
        <div className="div9">
          <DonutChartCard />
        </div>
      </MainContent>
    </Wrap>
  );
};

export default AdminDashboard;
const Wrap = styled.div`
  display: flex;
  background-color: #111;
`;

const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 100px 150px 250px 250px;
  grid-template-columns: repeat(3, 1fr) 310px;
  grid-gap: 20px;
  @media (max-width: 768px) {
    display: block;
  }
  .div1 {
    grid-column: 1/-1;
  }
  .div2 {
    grid-column: 1/4;
  }
  .div3 {
    background-color: gray;
  }
  .div4 {
    background-color: green;
  }
  .div5 {
    grid-row: 2/5;
    grid-column: 4/5;
  }
  .div6 {
    grid-column: 1/3;
  }
  .div7 {
  }
  .div8 {
    grid-column: 1/3;
  }
  .div9 {
  }
`;
