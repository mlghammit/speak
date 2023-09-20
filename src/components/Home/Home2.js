import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/IMG_4222.JPG"
import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body" data-aos="fade-up">
              <br />
              Are you interested in becoming a member of our
            </p>
            <p className="Team-gradient">
              Team?
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img className="condo-pic"
                data-aos="fade-left"
                src={myImg}
                alt="avatar"
              />
            </Tilt>
          </Col>

          <a
                href="https://forms.fillout.com/t/f39YTPbqyTus"
                className="button-gradient2 w-inline-block" 
                ><div>‎ ‎ ‎  ‎ ‎  ‎ ‎  ‎ ‎  ‎ ‎ ‎‎ ‎‎‎ ‎ ‎ ‎‎ ‎‎‎ ‎ ‎ ‎Join Our Team</div></a
              >
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://youtube.com/@SpeakOrgYT?si=YM4SiFZV78ndudYB"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="youtube"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/speak-org/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/speakwestern/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons-two">
                <a
                href="https://speakwestern-newsletter.beehiiv.com/subscribe"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons-two"
                aria-label="news_letter"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
