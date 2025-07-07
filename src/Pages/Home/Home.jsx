import React from "react";
import "./Home.css";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

import Hero_Banner from "../../assets/hero_banner.jpg";
import Hero_title from "../../assets/hero_title.png";
import Play from "../../assets/play_icon.png";
import Info from "../../assets/info_icon.png";
import TitleCards from "../../Components/TitleCards/TitleCards";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="hero">
        <img src={Hero_Banner} alt="hero_banner" className="banner-img" />
        <div className="hero-caption">
          <img src={Hero_title} alt="hero_title" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={Play} alt="Play_icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={Info} alt="Info_icon" />
              more Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
    </>
  );
};

export default Home;
