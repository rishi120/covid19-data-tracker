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
    gsapTimeline.from(elementSelectors, {
      y: -100,
      opacity: 0,
      ease: Power2.easeInOut,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.1,
    });
  }, []);
  return (
    <section className="landing-section panel">
      <div className="wrap-section">
        <Container>
          <h1 id="headingAnimation">Covid 19 Guwahati Stats</h1>
          <div className="grid-center">
            <Row>
              <Col md={3}>
                <div className="grid-wrapper">
                  <p>Total</p>
                  <h1 className="confirmed">{props.getCovidData.confirmed}</h1>
                </div>
              </Col>
              <Col md={3}>
                <div className="grid-wrapper">
                  <p>Active</p>
                  <h1 className="active">{props.getCovidData.active}</h1>
                </div>
              </Col>
              <Col md={3}>
                <div className="grid-wrapper">
                  <p>Recovered</p>
                  <h1 className="recovered">{props.getCovidData.recovered}</h1>
                </div>
              </Col>
              <Col md={3}>
                <div className="grid-wrapper">
                  <p>Deaths</p>
                  <h1 className="deceased">{props.getCovidData.deceased}</h1>
                </div>
              </Col>
            </Row>
          </div>

          <img src={props.Scrollgif} alt="Scroll Down" id="imgAnimation" />
        </Container>
      </div>
    </section>
  );
};
export default Renderlandingsection;
