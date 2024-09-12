import React from "react";
import "./HeroSection.css";
import Card from "../../Components/Card";

const dinamicText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export default function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <video width="100%" height="100%" autoPlay loop muted>
          <source
            src={`${process.env.PUBLIC_URL}/videos/video2.mp4`}
            type="video/mp4"
          />
        </video>
        <div className="home_naslov">
          <a className="neon-button" href="#cardsection">
            <span className="neon-span"></span>
            <span className="neon-span"></span>
            <span className="neon-span"></span>
            <span className="neon-span"></span>
            Početak
          </a>
        </div>
        <div className="home_sekcija1">
          <div className="home_sekcija1_1">
            <img src="images/img1.jpg" alt="" />
          </div>
          <div className="home_sekcija1_2">
            <ul>
              <li>
                The cat sat by the window, watching the rain fall softly
                outside.
              </li>
              <li>
                In the middle of the forest, there was a hidden path no one had
                discovered for years.
              </li>
              <li>
                The stars lit up the night sky like diamonds scattered across
                black velvet.
              </li>
              <li>
                He always dreamed of traveling to distant galaxies and exploring
                the unknown.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cardSection" id="cardsection">
        <div className="cardContainer">
          <Card content={dinamicText} />
        </div>
        <div className="cardContainer">
          <Card content={dinamicText} />
        </div>
        <div className="cardContainer">
          <Card content={dinamicText} />
        </div>
        <div className="cardContainer">
          <Card content={dinamicText} />
        </div>
        <div className="cardContainer">
          <Card content={dinamicText} />
        </div>
        <div className="cardContainer">
          <Card content={dinamicText} />
        </div>
      </div>
    </>
  );
}
