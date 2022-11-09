import "./ListItem.scss";

import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import { useState } from "react";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 275 - 50 + index * 5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://photo-cms-tpo.epicdn.me/w890/Uploaded/2022/bwivbwiv/2021_12_01/1-3357.jpeg"
        alt=""
      />
      {isHovered && (
        <>
          <iframe
            src="https://www.youtube.com/embed/u9Mv98Gr5pY?autoplay=1&mute=1&loop=1&controls=0"
            title="VENOM - Official Trailer (HD)"
          ></iframe>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 37 mins</span>
              <span className="limit">13+</span>
              <span>2021</span>
            </div>
            <div className="desc">
              Eddie Brock attempts to reignite his career by interviewing serial
              killer Cletus Kasady, who becomes the host of the symbiote Carnage
              and escapes prison after a failed execution.
            </div>
            <div className="genre">Action Adventure Sci-fi</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
