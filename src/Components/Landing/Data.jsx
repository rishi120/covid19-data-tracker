import React from "react";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";

const Renderchildcomponent = (props) => {
  if (props.stateName === "Andaman and Nicobar Islands") {
    return (
      <Form.Control
        as="select"
        onChange={(event) => props.handleStateChange(event.target.value)}
      >
        <option>Select District</option>
        {Object.keys(props.Andaman).map((districts) => {
          return (
            <option key={uuidv4()} defaultValue={districts}>
              {districts}
            </option>
          );
        })}
      </Form.Control>
    );
  } else if (props.stateName === "Arunachal Pradesh") {
    return (
      <Form.Control
        as="select"
        onChange={(event) => props.handleStateChange(event.target.value)}
      >
        <option>Select District</option>
        {Object.keys(props.Arunachal).map((districts) => {
          return (
            <option key={uuidv4()} defaultValue={districts}>
              {districts}
            </option>
          );
        })}
      </Form.Control>
    );
  } else if (props.stateName === "Assam") {
    return (
      <Form.Control
        as="select"
        onChange={(event) => props.handleStateChange(event.target.value)}
      >
        <option>Select District</option>
        {Object.keys(props.Assam).map((districts) => {
          return (
            <option key={uuidv4()} defaultValue={districts}>
              {districts}
            </option>
          );
        })}
      </Form.Control>
    );
  } else if (props.stateName === "Bihar") {
    return (
      <Form.Control
        as="select"
        onChange={(event) => props.handleStateChange(event.target.value)}
      >
        <option>Select District</option>
        {Object.keys(props.Bihar).map((districts) => {
          return (
            <option key={uuidv4()} defaultValue={districts}>
              {districts}
            </option>
          );
        })}
      </Form.Control>
    );
  } else if (props.stateName === "Andhra Pradesh") {
    return (
      <Form.Control
        as="select"
        onChange={(event) => props.handleStateChange(event.target.value)}
      >
        <option>Select District</option>
        {Object.keys(props.Andhra).map((districts) => {
          return (
            <option key={uuidv4()} defaultValue={districts}>
              {districts}
            </option>
          );
        })}
      </Form.Control>
    );
  } else if (props.stateName === "State Unassigned") {
    return (
      <p className="no-data">
        Not able to accumulate data as state is unassigned.
      </p>
    );
  }
  return (
    <p className="no-data">No District Wise Data Accumulated for this State.</p>
  );
};

const Renderdata = (props) => {
  return (
    <Renderchildcomponent
      stateName={props.stateName}
      handleStateChange={props.handleStateChange}
      Andaman={props.Andaman}
      Andhra={props.Andhra}
      Arunachal={props.Arunachal}
      Assam={props.Assam}
      Bihar={props.Bihar}
    />
  );
};

export default Renderdata;
