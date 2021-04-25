import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Renderimagedata from "../../Data/Image-data";

const Renderimagegrid = () => {
  useEffect(() => {
    const gsapTimeline = gsap.timeline();
    const imgAnimation = ".img-animation";
    gsapTimeline.from(imgAnimation, {
      ease: Power2.easeInOut,
      y: 100,
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: imgAnimation,
        start: "top 65%",
        end: "+=100",
        scrub: 1,
      },
    });
  }, []);
  return (
    <section className="image-grid panel">
      <Container>
        <Row>
          {Renderimagedata.map((getImageData) => {
            return (
              <Col md={3} key={getImageData.imgGrid}>
                <div className="img-wrapper img-animation">
                  <img src={getImageData.imgGrid} className="img-fluid" />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Renderimagegrid;
