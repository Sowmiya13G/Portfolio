import React, { useState } from "react";

// packages
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { pdfjs, Document, Page } from "react-pdf";

// components
import Particle from "../Particle";

// assets
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import CSS from "../../Assets/certificates/CSS.pdf";
import HTML from "../../Assets/certificates/HTML.pdf";
import Javascript from "../../Assets/certificates/Javascript.pdf";
import JAVASCRIPT from "../../Assets/certificates/Mindluster_Certificate.pdf";
import pdf from "../../Assets/certificates/UDEMY_JS_.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Certifications() {
  const certificates = [pdf, Javascript, CSS, HTML, JAVASCRIPT];
  const [cardWidth, setCardWidth] = useState(300); // Default width for the card

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Certifications </strong>
        </h1>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {certificates?.map((item, index) => (
            <Col md={4}
                className="certificate-card-view"
            
              key={index}>

              <Card
                className="project-card-view"
                style={{
                  width: `${cardWidth + 20}px`,
                  justifyContent: "center",
                  padding: "10px",
                }}
              >
                <Document
                  file={item}
                  style={{
                    margin: "2px",
                  }}
                >
                  <Page
                    pageNumber={1}
                    width={cardWidth}
                    style={{
                      margin: "2px",
                    }}
                  />
                </Document>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
