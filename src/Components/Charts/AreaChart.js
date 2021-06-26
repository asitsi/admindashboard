import React from "react";
import styled from "styled-components";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Line } from "react-chartjs-2";

const AreaChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 4, 6, 10, 9, 13, 17, 14],
        backgroundColor: [
          "rgba(245,66,66,0.4)",
          "rgba(255, 0, 0, 1)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(255, 0, 0, 1)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 0, 0, 1)",
        ],
        borderColor: [
          "rgba(245,66,66,1)",
          "rgba(255, 0, 0, 1)",
          "rgba(255, 0, 0, 1)",
          "rgba(255, 0, 0, 1)",
          "rgba(255, 0, 0, 1)",
          "rgba(255, 0, 0, 1)",
        ],
        borderWidth: 1,
        fill: "start",
        responsive: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        bottom: 100,
      },
    },
  };

  return (
    <Wrap>
      <Header>
        <div>
          <h6>Applications Received</h6>
        </div>
        <div>
          <Button>This Year</Button>
          <Button>This Week</Button>
          <Button>Today</Button>
          <Button>
            <CloudDownloadIcon /> Download Report
          </Button>
          <Button>
            <MoreVertIcon />
          </Button>
        </div>
      </Header>
      <Item>
        <Line data={data} options={options} />
      </Item>
    </Wrap>
  );
};

export default AreaChart;

const Wrap = styled.div`
  width: 97%;
  border: 4px solid rgba(51, 51, 51, 0.6);
  box-shadow: 0 0 10px rgba(51, 51, 51, 0.6);
  border-radius: 20px;
  padding: 1rem;
  height: fit-content;
  margin-left: 1.3rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  h6 {
    color: #999;
  }
`;
const Button = styled.button`
  background: transparent;
  color: #999;
  border: none;
  margin-left: 1.5rem;
  font-size: 12px;
`;
const Item = styled.div`
  height: 190px;
  width: 580px;
`;
