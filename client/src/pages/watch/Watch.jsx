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
        <source src="" type="video/mp4"></source>
      </video>
    </div>
  );
};

export default Watch;
