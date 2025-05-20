import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "./components/button";
import { useReducer } from "react";

const onNumberClick = (number) => {
  dispatch({ type: "SET_NUMBER", number });
};

const onOperationClick = (operation) => {
  dispatch({ type: "SET_OPERATION", operation });
};

const onChange = (e) => {
  dispatch({
    type: "UPDATE_INPUT",
    value: e.target.value,
  });
};

const initialState = {
  num1: null,
  num2: null,
  currentInput: "num1",
  operation: null,
  result: null,
};

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_NUMBER":
        return {
          ...state,
        };
      case "UPDATE_INPUT":
        return {
          ...state,
          [state.currentInput]: action.value,
        };
      case "increment":
      case "decrement":
      case "multiply":
      case "divide":
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <input
        type="number"
        value={state[state.currentInput]} //muestra num1 o num2, según el momento
        className="inputNumber"
        readOnly
        onChange={onChange}
      />

      <Container>
        <Row>
          <Col className="digits">
            <Row>
              <Button className="btn" content={1} onClick={onNumberClick} />
              <Button className="btn" content={2} onClick={onNumberClick} />
              <Button className="btn" content={3} onClick={onNumberClick} />
            </Row>
            <Row>
              <Button className="btn" content={4} onClick={onNumberClick} />
              <Button className="btn" content={5} onClick={onNumberClick} />
              <Button className="btn" content={6} onClick={onNumberClick} />
            </Row>
            <Row>
              <Button className="btn" content={7} onClick={onNumberClick} />
              <Button className="btn" content={8} onClick={onNumberClick} />
              <Button className="btn" content={9} onClick={onNumberClick} />
            </Row>
          </Col>

          <Col className="operations">
            <Button className="btn op" content="+" onClick={onOperationClick} />
            <Button className="btn op" content="-" onClick={onOperationClick} />
            <Button className="btn op" content="/" onClick={onOperationClick} />
            <Button className="btn op" content="x" onClick={onOperationClick} />
            <Button className="btn op" content="=" onClick={onOperationClick} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default App;
