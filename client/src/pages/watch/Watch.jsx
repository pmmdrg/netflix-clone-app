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
      <iframe
        className="video"
        src="https://www.youtube.com/embed/xLCn88bfW1o"
        title="VENOM - Official Trailer 2 (HD)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Watch;
