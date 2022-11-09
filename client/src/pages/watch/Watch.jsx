import "./Watch.scss";

import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <KeyboardBackspaceIcon />
        Home
      </div>
      <video className="video" controls>
        <source
          src="./video/PhimMoi.Net--Black.Panther.2018.1080p.BluRay.x264-Vietsub-480p.mp4"
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
};

export default Watch;
