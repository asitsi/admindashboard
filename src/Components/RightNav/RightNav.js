import React from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import DateRangeIcon from "@material-ui/icons/DateRange";
import MobileScreenShareIcon from "@material-ui/icons/MobileScreenShare";
import CommentIcon from "@material-ui/icons/Comment";
import CameraRearSharpIcon from "@material-ui/icons/CameraRearSharp";
import PinDropIcon from "@material-ui/icons/PinDrop";
import SettingsIcon from "@material-ui/icons/Settings";

const RightNav = () => {
  return (
    <Wrap>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2014/04/02/14/10/soccer-306385_960_720.png"
          alt="Img"
          className="img-fluid d-block h-60 w-60 pb-4"
        />
        <HomeIcon className="Icon" />
        <EqualizerIcon className="Icon" />
        <CameraRearSharpIcon className="Icon" />
        <FileCopyIcon className="Icon" />
        <DateRangeIcon className="Icon" />
        <PinDropIcon className="Icon" />
        <CommentIcon className="Icon" />
        <MobileScreenShareIcon className="Icon" />
      </div>
      <div>
        <SettingsIcon className="Icon" />
      </div>
    </Wrap>
  );
};

export default RightNav;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  padding: 2rem 1rem;
  border-right: 1px solid #333;
  img {
    width: 1.5rem;
  }
  .Icon {
    display: block;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #999;
    :hover {
      color: #12a4d9;
      border-bottom: 2px solid #12a4d9;
    }
  }
`;
