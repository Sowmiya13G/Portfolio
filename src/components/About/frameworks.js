import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiReact } from "react-icons/di";
import { SiFirebase } from "react-icons/si";

function Frameworks() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Frameworks;
