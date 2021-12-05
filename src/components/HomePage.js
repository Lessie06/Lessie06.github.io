import React from "react";
import cloud from "../images/cloud.png";
import mountain from "../images/mountain.png";
import Lessie from "../images/me.jpg";
import "../styling/HomePage.css";
import java from "../images/java.png";
import webdev from "../images/seo.png";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="top-container">
          <img className="top-cloud" src={cloud} alt="cloud-img"></img>
          <h1>I'm Lessie.</h1>
          <h2>
            A <span className="pro">pro</span>grammer.
          </h2>
          <img className="bottom-cloud" src={cloud} alt="cloud-img"></img>
          <img src={mountain}></img>
        </div>

        <div className="middle-container">
          <div class="profile">
            <img className="lessie-img" src={Lessie}></img>
            <h2>Hello.</h2>
            <p className="intro">
              I am currently majoring in Computer Science at Lehman College.
            </p>
          </div>
          <hr></hr>

          <div className="skills">
            <h2>My Skills.</h2>
            <div className="skill-row">
              <img className="java-img" src={java} alt="java-img"></img>
              <h3>Java Coding</h3>
              <p>
                Java code is the first coding language that I learned in school.
                I want to continue learning and mastering this skill as well as
                other languages I`ve learned.
              </p>
            </div>

            <div className="skill-row">
              <img className="webdev-img" src={webdev}></img>
              <h3>Web Development</h3>
              <p>
                I am currently learning how to create websites and implement
                languages such as HTML, CSS, and javascript. Web development
                actually got me into coding which I have loved ever since.
              </p>
            </div>
          </div>
          </div>
          <hr></hr>
          <div class="contact-me">
            <h2>Get In Touch</h2>
            <h3>
              If you like coding and want to share ideas or help each other out.
            </h3>
            <p class="contact-message">
              Then contact me because I love new challenges and different ways
              to solve problems.
            </p>
            <a class="btn" href="contactme.html">
              CONTACT ME
            </a>
          </div>
          <div class="bottom-container">
            <a class="footer-link" href="https://www.instagram.com/lessie07/">
              Instagram
            </a>
            <a class="footer-link" href="https://github.com/Lessie06/">
              GitHub
            </a>
            <a class="footer-link" href="www.linkedin.com/in/lessie-quezada">
              Linkedin
            </a>
            <p class="copyright">© 2021 Lessie Quezada.</p>
          </div>
        
      </div>
    );
  }
}

export default HomePage;
