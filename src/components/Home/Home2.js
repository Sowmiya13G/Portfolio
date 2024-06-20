import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am passionate about programming, specializing in{" "}
              <b className="purple">React Native</b> and{" "}
              <b className="purple">React.js</b>. I also have experience with{" "}
              <b className="purple">Firebase</b> for backend services and data
              management, along with various CSS libraries for styling.
              <br />
              <br />
              My interests lie in developing new{" "}
              <i>
                <b className="purple">Web Technologies and Products</b>
              </i>
              .
              <br />
              <br />
              Whenever possible, I leverage my skills in{" "}
              <b className="purple">JavaScript</b> and{" "}
              <i>
                <b className="purple">
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>{" "}
              like{" "}
              <i>
                <b className="purple">React.js</b>
              </i>
              .
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sowmiya13G"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
