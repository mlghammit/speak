import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Photo from '/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/IMG_4222.JPG'
import "./about.css";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Shan from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/Untitled design (2).png"
import Junaid from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/Untitled design (8).png"
import Juhi from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/Untitled design (12).png"
import Sartaj from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/Untitled design (16).png"
import Connor from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/Untitled design (7).png"
import Lara from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/Untitled design (6).png"
import Gabi from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/Untitled design (3).png"
import Ravneet from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/Untitled design (4).png"
import Hamza from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/IMG_5017 (2).png"
import Serjan from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/Untitled design (13).png"
import Other from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/Intentionally-created-Blank-Profile.jpg"
import Cindy from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/Untitled design (25).png"
import Fabiola from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Untitled design (26).png"
import Marshal from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/Untitled design (18).png"
import Anna from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/Untitled design (24).png"
import Charvi from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/Untitled design (21).png"
import Jessica from "/Users/hamzakhamissa/Desktop/Portfolio-Website-main/src/Assets/Headshots/Untitled design (20).png"
function About() {
  // Define an array of team member data
  const teamMembers = [
    {
      name: "Shan Mapp",
      title: "President and Founder",
      imageUrl: Shan
    },
    {
      name: "Gabriella Mckenna",
      title: "Vice President of Partnerships",
      imageUrl: Gabi

    },
    {
      name: "Lara Ramos",
      title: "Vice President of Finance & Strategy",
      imageUrl: Lara
    },
    {
      name: "Sartaj Bedi",
      title: "Vice President of Operations",
      imageUrl: Sartaj
    },
    {
      name: "Junaid Koossa",
      title: "Vice President of Marketing",
      imageUrl: Junaid
    },
    {
      name: "Connor Law",
      title: "Project Manager",
      imageUrl: Connor
    },
    {
      name: "Juhi Patel",
      title: "Project Manager",
      imageUrl: Juhi
    },
    {
      name: "Cindy Cui",
      title: "Project Manager",
      imageUrl: Cindy
    },
    {
      name: "Ravneet Sembhi",
      title: "Director of Finance & Strategy",
      imageUrl: Ravneet
    },
    {
      name: "Keeyan Mithani",
      title: "Director of Finance & Strategy",
      imageUrl: Other
    },
    {
      name: "Jessica Chen",
      title: "Director of Finance & Strategy",
      imageUrl: Jessica
    },
    {
      name: "Nikita Bajpai",
      title: "Director of Marketing",
      imageUrl: Other
    },
    {
      name: "Tavishi Dhariwal",
      title: "Director of Marketing",
      imageUrl: Other
    },
    {
      name: "Anna Lei",
      title: "Director of Marketing",
      imageUrl: Anna
    },
    {
      name: "Omer Waqar",
      title: "Director of Marketing",
      imageUrl: Other
    },
    {
      name: "Jamie Lee",
      title: "Director of Marketing",
      imageUrl: Other
    },
    {
      name: "Serjan Kaur",
      title: "Director of Partnership",
      imageUrl: Serjan
    },
    {
      name: "Fabiola Skrzypek",
      title: "Legal Affairs",
      imageUrl: Fabiola
    },
    {
      name: "Charvi Guduru",
      title: "Legal Affairs",
      imageUrl: Charvi
    },
    {
      name: "Marshal Guo",
      title: "People & Culture Officer",
      imageUrl: Marshal
    },
    {
      name: "Hamza Khamissa",
      title: "Full-Stack Developer",
      imageUrl: Hamza
    },
    {
      name: "Uday Brar",
      title: "Director of Partnerships",
      imageUrl: Other
    },
    {

    }
    // Add more team members as needed
  ];

  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              data-aos="fade-right"
            >
              <span className="primary-header">About</span>{" "}
              <span className="header-us">us</span>
            </h1>
          </Col>

          <p className="description-paragraph">
            We are on a mission to rekindle meaningful communication in an ever
            increasingly disconnected world. Our non-profit organization aims to
            empower youth from across Canada with essential communication skills
            to excel in personal, professional, and academic social situation. We
            provide a comprehensive platform for young individuals to learn,
            practice, develop and enhance their communication abilities.
          </p>

          <p className="description-paragraph-2">
            Our non-profit organization aims to empower youth from across Canada
            with essential communication skills to excel in personal,
            professional, and academic social situations. We provide a
            comprehensive platform for young individuals to learn, practice,
            develop and enhance their communication abilities.
          </p>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={Photo}
              alt="about"
              className="condo-image"
              data-aos="fade-left"
            />

            <h2 className="our-mission">Our Mission</h2>

            <p className="our-mission-description">
              We envision a world where everybody has the opportunity to learn
              communication skills. From learning how to do interviews,
              speeches or in relationships; our mission is to make communication
              education accessible to everyone.
            </p>

            <h3 className="the-team">
              <span className="the-team-header"> The </span>{" "}
              <span className="the-team-header-2"> Team</span>
            </h3>

            {/* Generate team members dynamically */}
            <div className="team-grid">
              {teamMembers.map((member, index) => (
              <div className={`team-member ${member.name === "Hamza Khamissa" ? "hamza-section" : ""}`} key={index}>
                <img
                  src={member.imageUrl} 
                  alt={member.name}
                />
                <div className="member-details">
                  <h3>{member.name}</h3>
                  <p>{member.title}</p>
                </div>
              </div>
            ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social-two">
            <ul className="home-about-social-links-two" data-aos="fade-up">
              <li className="social-icons-two">
                <a
                  href="https://youtube.com/@SpeakOrgYT?si=YM4SiFZV78ndudYB"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons-two"
                  aria-label="youtube"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons-two">
                <a
                  href="https://www.linkedin.com/company/speak-org/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons-two"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons-two">
                <a
                  href="https://www.instagram.com/speakwestern/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons-two"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons-two">
                <a
                href="https://speakwestern.beehiiv.com/"
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
      <ScrollToTop />
    </Container>
  );
}

export default About;
