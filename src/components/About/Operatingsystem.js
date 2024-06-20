import React from "react";
import { Col, Row } from "react-bootstrap";
import { IoLogoWindows, IoLogoApple, IoLogoAndroid } from "react-icons/io5";

function OperatingSystem() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoApple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoAndroid />
      </Col>

    </Row>
  );
}

export default OperatingSystem;
