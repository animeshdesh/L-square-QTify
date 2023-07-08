import React from "react";
import { ReactComponent as Heroimg } from "../../Assets/Heroimg.svg";
import "./hero.modules.css";
const Hero = () => {
  return (
    <div className="wrapper">
      <div className="text">
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <Heroimg />
    </div>
  );
};

export default Hero;
