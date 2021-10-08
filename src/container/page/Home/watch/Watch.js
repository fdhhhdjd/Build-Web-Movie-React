import React from "react";
import "./watch.css";
import video from "../../../../Images/trailer.mp4";
import { ArrowBackOutlined } from "@material-ui/icons";
const Watch = () => {
  return (
    <>
      <div className="watch">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
        <video className="video" autoPlay muted progress controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Watch;
