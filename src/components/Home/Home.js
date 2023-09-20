import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import Home2 from "./Home2";
import image from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/IMG_0280.jpg";

import "./home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Raising the Bar for Public Speaking{" "}
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Speak Org At Western University</strong>
              </h1>

              <p className="Description-long">
                Empowering individuals to become confident and effective communications. We believe good communication
                skills are essential for success in both personal and professional life. <strong>We're Creating the Next Generation of Confident Speakers.</strong>
              </p>

              <div style={{ padding: 30 }} className="type">
              </div>

              <a
                href="about"
                className="button-gradient w-inline-block"
                ><div>‎ ‎ ‎ ‎‎ ‎‎‎ ‎ ‎ ‎‎ ‎‎‎ ‎ ‎ ‎ ‎ Learn More About Us</div></a
              >
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img className = "Logo"
                src= {image}
                alt="home pic"
              
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <ScrollToTop />
    </section>
  );
}

export default Home;
