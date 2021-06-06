import React from "react";
import { Modal } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import Renderdata from "./Data";
import Rendercoviddata from "./Covid-data";

const Rendermodal = (props) => {
  return (
    <Modal
      show={props.modal}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
      centered
      size="lg"
    >
      <Modal.Header>
        {props.stateName == "Total" ? (
          <Modal.Title style={{ color: "#372d72" }}>India</Modal.Title>
        ) : (
          <Modal.Title style={{ color: "#372d72" }}>
            {props.stateName} District Wise Data
          </Modal.Title>
        )}
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Control type="text" value={props.stateName} disabled />
        </Form.Group>
        <Renderdata
          stateName={props.stateName}
          handleStateChange={props.handleStateChange}
          Andaman={props.Andaman}
          Andhra={props.Andhra}
          Arunachal={props.Arunachal}
          Assam={props.Assam}
          Bihar={props.Bihar}
        />
        <Rendercoviddata
          getDistrictNames={props.getDistrictNames}
          activeData={props.activeData}
          recoveredData={props.recoveredData}
          confirmedData={props.confirmedData}
          deathData={props.deathData}
          loading={props.loading}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Back
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Rendermodal;
