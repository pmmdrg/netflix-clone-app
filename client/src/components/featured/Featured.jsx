import "./Featured.scss";

import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1512593834-peaky3-1565255828.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://dnm.nflximg.net/api/v6/99PFSeD8sQZJBrGfVxGgWT8kG6s/AAAAQdLtYzYKPaNFtSLiwoveZLPD73mUnAygC2lyQB5uTSorKJz8jKTWP6HDk2we5RNq228A4Z8DdWy0BTsUJMM1HVERQDU8jyQT44vZLOqGFceV4kZk0IloQigXTvAtUVS8MZmX2EIIsNYZ8I1KzBqW.png?r=216"
          alt=""
        />
        <span className="desc">Desc</span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>More info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
