import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "./components/button";
import { useReducer } from "react";

function App() {
  const initialState = {
    num1: "",
    num2: "",
    currentInput: "num1",
    operation: null,
    result: null,
  };
  /*{ console.log("[state.currentInput]:", state.currentInput); //;['num1']
          console.log("state[state.currentInput]:", state[state.currentInput]); //:1-> es como hacer state['num1']         
        }
          return {
          ...state,
          state.currentInput:...... ,//así estoy declarando una nueva propiedad llamada 'state.currentInput'} */

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_NUMBER":
        return {
          ...state,
          [state.currentInput]: state[state.currentInput] + action.value, //así piso, por ej, el valor de num1
        };

      case "SET_OPERATION":
        return {
          ...state,
          operation: action.value,
          currentInput: "num2",
        };

      case "CALCULATE":
        const num1 = parseFloat(state.num1);
        const num2 = parseFloat(state.num2);
        let result;

        switch (state.operation) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "x":
            result = num1 * num2;
            break;
          case "/":
            result = num2 !== 0 ? num1 / num2 : "Error";
            break;
          default:
            result = "Error";
        }
        return {
          ...state,
          result,
          currentInput: "num1",
          num1: result.toString(),
          num2: "",
          operation: null,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onNumberClick = (number) => {
    {
      console.log("number:", number);
    }
    dispatch({ type: "SET_NUMBER", value: number });
  };

  const onOperationClick = (operation) => {
    if (operation === "=") {
      dispatch({ type: "CALCULATE" });
    } else {
      dispatch({ type: "SET_OPERATION", value: operation });
    }
  };

  const onCheckState = () => {
    {
      console.log("currentState:", state);
    }
  };

  return (
    <>
      <input
        type="number"
        value={state[state.currentInput]} //muestra num1 o num2, según el momento
        className="inputNumber"
        readOnly
      />

      <Container>
        <Row>
          <Col className="digits">
            <Row>
              <Button content={"1"} click={onNumberClick} />
              <Button className="btn" content={"2"} click={onNumberClick} />
              <Button className="btn" content={"3"} click={onNumberClick} />
            </Row>
            <Row>
              <Button className="btn" content={"4"} click={onNumberClick} />
              <Button className="btn" content={"5"} click={onNumberClick} />
              <Button className="btn" content={"6"} click={onNumberClick} />
            </Row>
            <Row>
              <Button className="btn" content={"7"} click={onNumberClick} />
              <Button className="btn" content={"8"} click={onNumberClick} />
              <Button className="btn" content={"9"} click={onNumberClick} />
              <Button className="btn" content={"0"} click={onNumberClick} />
            </Row>
          </Col>

          <Col className="operations">
            <Button className="btn op" content="+" click={onOperationClick} />
            <Button className="btn op" content="-" click={onOperationClick} />
            <Button className="btn op" content="/" click={onOperationClick} />
            <Button className="btn op" content="x" click={onOperationClick} />
            <Button className="btn op" content="=" click={onOperationClick} />
          </Col>
          <button onClick={onCheckState}>Check current State</button>
        </Row>
      </Container>
    </>
  );
}
export default App;
