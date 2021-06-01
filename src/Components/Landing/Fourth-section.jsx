import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export const Rendertodolist = (props) => {
  return (
    <section className="todo-wrapper panel">
      <Container>
        <Row>
          <Col md={6}>
            <input
              type="text"
              placeholder="Enter Task"
              onChange={(e) => props.handleTaskValue(e)}
            />
            <h1>{props.getTaskValue}</h1>
            <Button
              variant="primary"
              type="submit"
              onClick={props.handleInputClick}
            >
              Add Task
            </Button>
          </Col>
          <Col md={6}>
            <div className="todo-list">
              <div className="task-list">
                <h1>Show Tasks Here</h1>
                <ul>
                  <li>{props.getTaskValueOnClick}</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
