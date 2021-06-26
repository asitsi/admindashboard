import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

const CurcalProgressBar = (props) => {
  return (
    <Wrap>
      <CircularProgressbarWithChildren
        value={props.fill}
        styles={buildStyles({
          pathColor: `${props.color}`,
          trailColor: "#222222",
          height: "100px",
          width: "100px",
        })}
      >
        {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
        <StyleContent>
          <strong>+{props.fill}%</strong>
        </StyleContent>
      </CircularProgressbarWithChildren>
    </Wrap>
  );
};

export default CurcalProgressBar;

const Wrap = styled.div`
  height: 70px;
  width: 70px;
`;

const StyleContent = styled.div`
  font-size: 12;
  margin-top: -9;
  color: ${(props) => props.color};
`;
