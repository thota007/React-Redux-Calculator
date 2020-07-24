import React, { Component } from 'react'
import Keypad from "./Keypad"
import Output from "./Output"
import { connect } from "react-redux"

class Action extends Component {
  state = {
    result: "",
  };

  buttonPressed = (buttonName) => {
    console.log(buttonName)

    if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "C") {
      this.reset()
    } else if (buttonName === "square") {
      this.props.dispatch({ type: "square" })
    } else if (buttonName === "root") {
      this.props.dispatch({ type: "root" })
    }
    else if (buttonName === "ln") {
      this.props.dispatch({ type: "ln" })
    }
    else if (buttonName === "pi") {
      this.props.dispatch({ type: "pi" })
    }
    else if (buttonName === "sin") {
      this.props.dispatch({ type: "sin" })
    }
    else if (buttonName === "cos") {
      this.props.dispatch({ type: "cos" })
    }
    else if (buttonName === "tan") {
      this.props.dispatch({ type: "tan" })
    }
    else if (buttonName === "sign") {
      this.props.dispatch({ type: "sign" })
    }
    else
      this.button(buttonName)
  };

  button = buttonName => {
    this.props.dispatch({ type: "button", buttonName });

    /*this.setState({   
    result: this.state.result + buttonName
    });*/
  };

  reset = () => {
    this.props.dispatch({ type: "reset" });
  };

  calculate = () => {

    this.props.dispatch({ type: "calculate" });



  };



  /* try{this.setState({
      result: (eval(this.state.result) || "")+ "" 
    });} catch (e){
      this.setState({
        result: "error"
      })
    } */


  render() {

    return (
      <div className="App">
        <div className="calc-body">
          <Output result={this.props.result} />
          <Keypad buttonPressed={this.buttonPressed} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

  result: state.result,




})

export default connect(mapStateToProps)(Action);
