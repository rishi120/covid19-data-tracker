import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Renderabstractimagedata from "../../Data/Abstract-image-data";

const Renderthirdsection = (props) => {
  useEffect(() => {
    const gsapTimeline = gsap.timeline();
    const animateImageWrapper = ".animate-image-wrapper";
    gsapTimeline.from(animateImageWrapper, {
      ease: Power2.easeInOut,
      y: 100,
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: animateImageWrapper,
        start: "top 65%",
        end: "+=100",
        scrub: 1,
      },
    });
  }, []);
  return (
    <section className="third-section panel">
      <Container>
        <Row>
          {Renderabstractimagedata.map((getAbstractImageData) => {
            return (
              <Col md={3} key={getAbstractImageData.abstractImage}>
                <div className="img-wrapper animate-image-wrapper">
                  <img
                    src={getAbstractImageData.abstractImage}
                    className="img-fluid"
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
export default Renderthirdsection;
