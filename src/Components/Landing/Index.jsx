import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
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
      y: 100,
      opacity: 0,
      ease: Power2.easeInOut,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.1,
    });
  }, []);
  return (
    <section className="landing-section panel">
      <Container>
        <h1 id="headingAnimation">Welcome to Gsap Layered Pinning</h1>
        <p id="paraAnimation">Scroll down to see the effect</p>
        <img src={props.Scrollgif} alt="Scroll Down" id="imgAnimation" />
      </Container>
    </section>
  );
};
export default Renderlandingsection;
