import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Frameworks from "./frameworks";
import OperatingSystem from "./Operatingsystem";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
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
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Professional Skillset </strong>
        </h1>
        <h1 className="project-heading">Programming Languages</h1>
        <Techstack />

        <h1 className="project-heading">Frameworks</h1>
        <Frameworks />
        <h1 className="project-heading">Development Tools</h1>
        <Toolstack />

        <h1 className="project-heading"> Operating Systems</h1>

        <OperatingSystem />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
