import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! I'm <span className="purple">Sowmiya</span> from{" "}
            <span className="purple">Chengalpet, India</span>, currently thriving as a software engineer at Doodleblue Innovations.
            <br />
            I hold a Bachelor of Engineering (BE) in Computer Science from DSCET, Anna University, where my passion for technology was nurtured.
            <br />
            <br />
            Beyond coding, I find joy in various activities:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Art and Crafts
            </li>
            <li className="about-activity">
              <ImPointRight /> Devouring Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Finding solace in Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I strive to create solutions that truly make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sowmiya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
