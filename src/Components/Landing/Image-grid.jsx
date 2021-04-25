import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Renderimagedata from "../../Data/Image-data";

const Renderimagegrid = () => {
  return (
    <section className="image-grid panel">
      <Container>
        <Row>
          {Renderimagedata.map((getImageData) => {
            return (
              <Col md={3} key={getImageData.imgGrid}>
                <div className="img-wrapper">
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
