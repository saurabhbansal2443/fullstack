import React from "react";
import "./Home.css";

const Home = ({th}) => {
  console.log(th, "from homecard ")
  return (
    <div className="main" style={{backgroundColor:th.theme=="light"?"rgb(153, 185, 245)" : "black"}}>
      <h1>
        <span> Saurabh Bansal</span>
        <div className="message">
          <div className="word1">Coder </div>
          <div className="word2">Mentor </div>
          <div className="word3">Youtuber </div>
        </div>
      </h1>
    </div>
  );
};

export default Home;
