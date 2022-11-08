import React from "react";
import Navbar from "../components/navbar/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        src="https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg"
        alt=""
        width="100%"
      />
    </div>
  );
};

export default Home;
