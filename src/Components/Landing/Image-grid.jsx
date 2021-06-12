import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import Renderimagedata from "../../Data/Image-data";
import Dropdown from "react-bootstrap/Dropdown";

const Renderimagegrid = (props) => {
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
  const covidData = [
    {
      status: "Confirmed",
      cases: props.getConfirmedCases,
      color: "confirmedCase",
    },
    {
      status: "Active",
      cases: props.getActiveCases,
      color: "activeCase",
    },
    {
      status: "Recovered",
      cases: props.getRecoveredCases,
      color: "recoveredCase",
    },
    {
      status: "Death",
      cases: props.getDeathCases,
      color: "deathCase",
    },
  ];
  return (
    <section className="image-grid panel">
      <h1>Covid World Wide Data Tracker</h1>
      <Container>
        <Row>
          <Col md={5} className="img-animation">
            <h1 className="select-countries-heading">
              Select Country to view covid data
            </h1>
            <input
              type="text"
              placeholder="Search Country..."
              onChange={(e) => props.handleCountrySearch(e.target.value)}
            />
            <div className="countries-wrapper">
              <ul>
                {props.countries.map((getAllCountries) => {
                  return (
                    <li
                      key={getAllCountries.country}
                      onClick={() =>
                        props.handleCountries(getAllCountries.country)
                      }
                    >
                      <img
                        src={getAllCountries.countryInfo.flag}
                        key={getAllCountries.countryInfo.flag}
                      />
                      {getAllCountries.country}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
          <Col md={7}>
            <div className="data-wrapper img-animation">
              <h1>{props.countryName}</h1>
              <Row>
                {covidData.map((getCovidCases) => {
                  return (
                    <Col md={6}>
                      <div className="inner-data-wrapper">
                        <h1
                          key={getCovidCases.status}
                          className={getCovidCases.color}
                        >
                          {getCovidCases.status}
                        </h1>
                        {props.loading && (
                          <h1 className="loading-data">Loading...</h1>
                        )}
                        <h1
                          key={getCovidCases.cases}
                          className={getCovidCases.color}
                        >
                          {getCovidCases.cases}
                        </h1>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Renderimagegrid;
