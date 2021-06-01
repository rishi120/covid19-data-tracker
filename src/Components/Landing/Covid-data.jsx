import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Rendercoviddata = () => {
  const covidData = [
    {
      cases: "Confirmed",
    },
    {
      cases: "Active",
    },
    {
      cases: "Recovered",
    },
    {
      cases: "Deceased",
    },
  ];
  return (
    <section className="data-wrapper">
      <Container>
        <Row>
          {covidData.map((getCovidData) => {
            return (
              <Col md={3} key={getCovidData.cases}>
                <div className="col-wrapper">
                  <h5 key={getCovidData.cases}>{getCovidData.cases}</h5>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Rendercoviddata;
