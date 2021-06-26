import React from "react";
import styled from "styled-components";

const ProgressBar = (props) => {
  return (
    <div>
      <ProgressItem>
        <ProgressData
          style={{ width: props.width, background: props.color }}
        ></ProgressData>
      </ProgressItem>
    </div>
  );
};

export default ProgressBar;

const ProgressItem = styled.div`
  width: 100%;
  height: 7px;
  background: #444;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

const ProgressData = styled.div`
  width: ${(props) => props.width};
  height: 7px;
  background: #ffc107;
  border-radius: 20px;
  display: block;
`;
