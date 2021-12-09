import React from "react";
import cloud from "../images/cloud.png";
import me from "../images/Lessie.jpg";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import Footer from "./Footer";
import "../styling/AboutMe.css";
import react from "../images/react.png";
import bootstrap from "../images/bootstrap.png";
import node from "../images/nodejs.png";
import Projectcards from "./Projectcard";

function AboutMe() {
  return (
    <div>
      <div className="top-container">
        <img className="topcloud" src={cloud} alt="cloud-img" />

        <img className="lessie-image" src={me} alt="Lessie-img" />

        <div className="about-me">
          <h1 className="header-text">Get to know me!</h1>
          <p className="intro-text">
            Raised in the Bronx, my father loved building and fixing computers.
            I always found it fascinating but I never found the courage to ask
            him about it. Due to this, I ventured on my own and settled for a
            major I wasn’t exactly sure of. Once I realized it wasn’t for me, I
            thought it was too late for me. During one summer, my father opened
            my eyes to the world of technology and soon on I spent most of my
            summer learning the basics of coding. Through the motivation of my
            father and my new found interest in technology, I was able to
            venture into the world of computer science and continue to grow my
            interest in tech. I focus mostly on web/full stack development but I
            am also very open in learning other aspects of tech such as data
            science, app development, and AI.
          </p>
        </div>

        <img className="bottomcloud" src={cloud} alt="cloud-img" />
      </div>

      <div className="skills-container">
        <h1 className="header-text">My Skills</h1>

        <div className="skills">
        <div className="row">
          <div className="column">
            <img className="images" src={html} alt="" />
            <img className="images" src={css} alt="" />
            <img className="images" src={javascript} alt="" />

            <img className="images" src={react} alt="" />
            <img className="images" src={bootstrap} alt="" />
            <img className="images" src={node} alt="" />
            <hr />
          </div>
          </div>
        </div>
      </div>

      <Projectcards />

      <Footer />
    </div>
  );
}

export default AboutMe;
