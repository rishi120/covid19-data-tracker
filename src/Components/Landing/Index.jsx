import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { v4 as uuidv4 } from "uuid";
import Rendermodal from "../Landing/Data-modal";
import Moment from "moment";

const Renderlandingsection = (props) => {
  return (
    <section className="landing-section panel">
      <Rendermodal
        handleClose={props.handleClose}
        modal={props.modal}
        stateName={props.stateName}
        showStateNames={props.showStateNames}
        handleStateChange={props.handleStateChange}
        Andhra={props.Andhra}
        Arunachal={props.Arunachal}
        Assam={props.Assam}
        Bihar={props.Bihar}
        // confirmed={props.confirmed}
        // active={props.active}
        // recovered={props.recovered}
        // deceased={props.deceased}
      />
      <div className="wrap-section">
        <Container className="no-pad">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search your State..."
              className="custom-search-input"
              ref={props.searchInput}
              onChange={(e) => props.handleSearch(e.target.value)}
            />
          </Form.Group>
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
                  <tr style={{ display: "block" }}>
                    <td className="data-loader">Loading...</td>
                  </tr>
                )}
                {props.showError && (
                  <tr style={{ display: "block" }}>
                    <td className="data-loader" style={{ color: "red" }}>
                      Error fetching data. Please try again...
                    </td>
                  </tr>
                )}
                {props.getCovidData.map((getStateWiseData) => {
                  return (
                    <tr
                      onClick={() => props.handleModal(getStateWiseData.state)}
                      style={{ cursor: "pointer" }}
                      key={uuidv4()}
                    >
                      {getStateWiseData.state == "Total" ? (
                        <td key={uuidv4()}>India</td>
                      ) : (
                        <td key={uuidv4()}>{getStateWiseData.state}</td>
                      )}
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
