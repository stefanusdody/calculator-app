import React, { Component } from 'react';
import { Button } from 'reactstrap';


const output = {
  marginTop: "80px",
  marginLeft: "20px",
  width: "1225px",
  height: "100px",
  border: "1px solid black",
  backgroundColor: "white",
  fontSize: "80px"
}

const rowOne = {
  marginTop: "5px",
  marginLeft: "17px",
  width: "100%",
  height: "70px",
  /* border: 1px solid black; */
  display: "flex"
}

const inputBtnOne = {
  width: "50%"
}

const resultOne = {
  width: "280px"
}

const result = {
  width: "280px",
  height: "145px"
}

class Calculator extends Component {
  constructor(){
    super();
    this.state = {
      output: "0",
      waitingForOperand: false,
      operator: null,
      value: null
    };
   this.handleChangeOutput = this.handleChangeOutput.bind(this);
  }

  handleChangeOutput(event) {
    let value = event.target.text;
    this.setState(() =>{
      return { output : value }
    });
  }

  inputDigit(digit) {
    const {output, waitingForOperand} = this.state
    if(waitingForOperand){
      this.setState({
        output: String(digit),
        waitingForOperand: false,
      })
    } else{
      this.setState({
        output : output === "0" ? String(digit) : output + digit
      })
    }
  }

  inputDot() {
    const {output, waitingForOperand} = this.state
    if(waitingForOperand){
      this.setState({
        output: ".",
        waitingForOperand: false,
      })
    }else if(output.indexOf(".") === -1) {
      this.setState({ output: output + "."})}
  }

  inputClear(){
    this.setState({
      output: "0"
    })
  }

  minusToggle(){
    const {output} = this.state
    this.setState({
      output: output.charAt(0) === "-" ? output.substr(1) : "-" + output
    })
  }

 addOperation(thisOperator){
    const {output, operator, value} = this.state
    // declaration for next value behind prev value
    const nextValue = parseFloat(output)
    const operations = {
    "/": (prevValue, nextValue) => prevValue / nextValue,
    "*": (prevValue, nextValue) => prevValue * nextValue,
    "-": (prevValue, nextValue) => prevValue - nextValue,
    "+": (prevValue, nextValue) => prevValue + nextValue,
    "=": (prevValue, nextValue) => nextValue
    }

    if(value === null) {
      this.setState({
        value: nextValue,
      })
    } else if (operator){
      const currentValue = value
      const resultValue = operations[operator](currentValue, nextValue)
      this.setState({
        value: resultValue,
        output: String(resultValue)
      })
    }

    this.setState({
    // for checking operator running or not
      waitingForOperand: true,
    // for checking which is operator running
      operator: thisOperator
  })
 }

// <prev>{JSON.stringify(this.state, null, 2)}</prev>
  render(){
    return (
    <div className="conCalculator">
      <form name="calculator">
        <input
         style={output}
         name="output"
         type="number"
         value={this.state.output}
         onChange={this.handleChangeOutput}/>
      </form>
      <div style={rowOne}>
        <Button outline className="inputBtn col-3 col-md-3" color="warning" onClick={() => this.inputClear()}><h1>C</h1></Button>{' '}
        <Button outline className="inputBtn col-3 col-md-3" color="warning" onClick={() => this.minusToggle()}><h1>(-)</h1></Button>{' '}
        <Button outline className="inputBtn col-3 col-md-3" color="warning" onClick={() => this.addOperation("/")}><h1>/</h1></Button>{' '}
        <Button outline style={resultOne} color="danger" onClick={() => this.addOperation("*")}><h1>X</h1></Button>{' '}
      </div>
      <div style={rowOne}>
        <Button outline className="inputBtn col-3 col-md-3" color="warning" onClick={() => this.inputDigit(7)}><h1>7</h1></Button>{' '}
        <Button outline className="inputBtn col-3 col-md-3" color="warning" onClick={() => this.inputDigit(8)}><h1>8</h1></Button>{' '}
        <Button outline className="inputBtn col-3 col-md-3" color="warning" onClick={() => this.inputDigit(9)}><h1>9</h1></Button>{' '}
        <Button outline style={resultOne} color="danger" onClick={() => this.addOperation("-")}><h1>-</h1></Button>{' '}
      </div>
      <div style={rowOne}>
        <Button outline className="inputBtn col-3 col-md-3" color="warning" onClick={() => this.inputDigit(4)}><h1>4</h1></Button>{' '}
        <Button outline className="inputBtn col-3 col-md-3" color="warning" onClick={() => this.inputDigit(5)}><h1>5</h1></Button>{' '}
        <Button outline className="inputBtn col-3 col-md-3" color="warning" onClick={() => this.inputDigit(6)}><h1>6</h1></Button>{' '}
        <Button outline style={resultOne} color="danger" onClick={() => this.addOperation("+")}><h1>+</h1></Button>{' '}
      </div>
      <div style={rowOne}>
        <Button outline className="inputBtn col-3 col-md-3" color="warning" onClick={() => this.inputDigit(1)}><h1>1</h1></Button>{' '}
        <Button outline className="inputBtn col-3 col-md-3" color="warning" onClick={() => this.inputDigit(2)}><h1>2</h1></Button>{' '}
        <Button outline className="inputBtn col-3 col-md-3" color="warning" onClick={() => this.inputDigit(3)}><h1>3</h1></Button>{' '}
        <Button outline style={result} color="danger" onClick={() => this.addOperation("=")}><h1>=</h1></Button>{' '}

      </div>
      <div style={rowOne}>
        <Button outline style={inputBtnOne} color="warning" onClick={() => this.inputDigit(0)}><h1>0</h1></Button>{' '}
        <Button outline className="inputBtn col-3 col-md-3" color="warning" onClick={() => this.inputDot()}><h1>.</h1></Button>{' '}
      </div>
    </div>
    )
  }
}

export default Calculator;
