import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Renderlandingsection = (props) => {
  useEffect(() => {
    const gsapTimeline = gsap.timeline();
    const elementSelectors = [
      "#headingAnimation",
      "#paraAnimation",
      "#imgAnimation",
    ];
    const custom = ".custom";
    gsapTimeline.from(elementSelectors, {
      y: -100,
      opacity: 0,
      ease: Power2.easeInOut,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.1,
    });
    gsapTimeline.from(custom, {
      y: -100,
      opacity: 0,
      // ease: Power2.easeInOut,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.1,
    });
  }, []);
  return (
    <section className="landing-section panel">
      <div className="wrap-section">
        <Container>
          <h1 id="headingAnimation">Covid 19 Guwahati Updates</h1>
          <div className="grid-center">
            <Row>
              {props.Rendercoviddata.map((getCases) => {
                return (
                  <Col md={3} key={getCases.heading} className="custom">
                    <div className="grid-wrapper">
                      <p>{getCases.heading}</p>
                      <h1>{getCases.getData}</h1>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>

          <img src={props.Scrollgif} alt="Scroll Down" id="imgAnimation" />
        </Container>
      </div>
    </section>
  );
};
export default Renderlandingsection;
