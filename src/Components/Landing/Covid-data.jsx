import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import { PieChart } from "react-minimal-pie-chart";

const Rendercoviddata = (props) => {
  const covidData = [
    {
      cases: "Confirmed",
      districtWiseData: props.confirmedData,
      textColorClass: "confirmed",
    },
    {
      cases: "Active",
      districtWiseData: props.activeData,
      textColorClass: "active",
    },
    {
      cases: "Recovered",
      districtWiseData: props.recoveredData,
      textColorClass: "recovered",
    },
    {
      cases: "Deceased",
      districtWiseData: props.deathData,
      textColorClass: "death",
    },
  ];
  // const pieChartData = [
  //   { districtData: props.confirmedData, value: 10, color: "#dc3545" },
  //   { districtData: props.activeData, value: 15, color: "#007bff" },
  //   { districtData: props.recoveredData, value: 20, color: "#28a745" },
  //   { districtData: props.deathData, value: 20, color: "#6c757d" },
  // ];
  return (
    <section className="data-wrapper">
      {props.getDistrictNames == "Kamrup Metropolitan" ? (
        <h1>{props.getDistrictNames} (Guwahati)</h1>
      ) : (
        <h1>{props.getDistrictNames}</h1>
      )}
      <Container>
        <Row>
          {covidData.map((getCovidData) => {
            return (
              <Col md={3} key={getCovidData.cases}>
                <div className="col-wrapper">
                  <h5
                    className={getCovidData.textColorClass}
                    key={getCovidData.cases}
                  >
                    {getCovidData.cases}
                  </h5>
                  {props.loading && <p className="loading">Loading...</p>}
                  <h1 className={getCovidData.textColorClass}>
                    {getCovidData.districtWiseData}
                  </h1>
                </div>
              </Col>
            );
          })}
        </Row>
        {/* <PieChart
          data={pieChartData}
          segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
        /> */}
      </Container>
    </section>
  );
};

export default Rendercoviddata;
