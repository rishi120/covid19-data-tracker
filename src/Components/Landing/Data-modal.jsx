import React from "react";
import { Modal } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

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
            {props.stateName}
          </Modal.Title>
        )}
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Delete Task
        </Button>
        <Button variant="primary">Submit Task</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Rendermodal;
