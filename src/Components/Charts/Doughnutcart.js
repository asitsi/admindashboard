import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";

const Doughnutcart = () => {
  const data = {
    labels: ["1", "2", "3"],
    datasets: [
      {
        data: [12, 19, 13],
        fill: false,
        backgroundColor: [
          "rgba(245, 66, 66,0.8)",
          "rgba(18,164,217,1)",
          "rgba(92, 60, 146, 1)",
        ],
        borderColor: [
          "rgba(245, 66, 66,0.8)",
          "rgba(18,164,217,1)",
          "rgba(92, 60, 146, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            display: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Component>
        <Doughnut data={data} options={options} />
      </Component>
    </div>
  );
};

export default Doughnutcart;

const Component = styled.div`
  width: 170px;
`;
