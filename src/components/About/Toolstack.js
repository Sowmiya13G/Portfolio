import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGit,
} from "react-icons/si";
import { DiAndroid } from "react-icons/di";
// import { IoLogoXcode } from "react-icons/io";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <IoLogoXcode />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
      </Col>
    </Row>
  );
}

export default Toolstack;
