import React, { useState } from "react";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import video from "../../../Images/trailer.mp4";

import "./listitem.css";
const ListItem = (index) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && <></>}
      </div>
    </>
  );
};

export default ListItem;
