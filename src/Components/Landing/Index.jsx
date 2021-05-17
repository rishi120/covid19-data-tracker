import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { v4 as uuidv4 } from "uuid";

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
      y: -50,
      opacity: 0,
      ease: Power2.easeInOut,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.1,
    });
    gsapTimeline.from(custom, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.1,
    });
  }, []);
  return (
    <section className="landing-section panel">
      <div className="wrap-section">
        <Container className="no-pad">
          <div className="table-wrapper">
            <Table responsive hover className="custom-table">
              <thead>
                <tr>
                  {props.RenderTableHeading.map((getTableHeaderData) => {
                    return (
                      <th key={uuidv4()}>{getTableHeaderData.tableHeading}</th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {props.loading && (
                  <tr>
                    <td className="data-loader">Loading...</td>
                  </tr>
                )}
                {props.showError && (
                  <tr>
                    <td className="data-loader" style={{ color: "red" }}>
                      Error fetching data. Please try again...
                    </td>
                  </tr>
                )}
                {props.getCovidData.map((getStateWiseData) => {
                  return (
                    <tr>
                      <td key={uuidv4()}>{getStateWiseData.state}</td>
                      <td key={uuidv4()}>{getStateWiseData.confirmed}</td>
                      <td key={uuidv4()}>{getStateWiseData.active}</td>
                      <td key={uuidv4()}>{getStateWiseData.recovered}</td>
                      <td key={uuidv4()}>{getStateWiseData.deaths}</td>
                      <td key={uuidv4()}>{getStateWiseData.lastupdatedtime}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default Renderlandingsection;
