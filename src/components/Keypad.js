import React, { Component } from 'react'

export class Keypad extends Component {
    buttonPressed = e => {
        this.props.buttonPressed(e.target.name);
    };
    render() {
        return (
            <div className="buttons">
                <button className = "clr" name="C" onClick= {this.buttonPressed}>C</button>
                <button  name="(" onClick= {this.buttonPressed}>(</button>
                <button  name=")" onClick= {this.buttonPressed}>)</button>
                
        
            
                <button className="Symbol" name="/" onClick= {this.buttonPressed}>÷</button>
                <button name="7" onClick= {this.buttonPressed}>7</button>
                <button name="8" onClick= {this.buttonPressed}>8</button>
                <button name="9" onClick= {this.buttonPressed}>9</button>
                <button className="Symbol" name="-" onClick= {this.buttonPressed}>-</button>
                <button name="4" onClick= {this.buttonPressed}>4</button>
                <button name="5" onClick= {this.buttonPressed}>5</button>
                <button name="6" onClick= {this.buttonPressed}>6</button>
                <button className="Symbol" name="+" onClick= {this.buttonPressed}>+</button>
                <button name="1" onClick= {this.buttonPressed}>1</button>
                <button name="2" onClick= {this.buttonPressed}>2</button>
                <button name="3" onClick= {this.buttonPressed}>3</button> 
                <button className="Symbol" name="=" onClick= {this.buttonPressed}>=</button>


                <button  name="0" onClick= {this.buttonPressed}>0</button>
                <button  name="." onClick= {this.buttonPressed}>.</button>
                
                <button className="Symbol" name="*" onClick= {this.buttonPressed}>*</button>
                <button className="Symbol" name="%" onClick= {this.buttonPressed}>%</button>
                <button className="Symbol" name="root" onClick= {this.buttonPressed}>√</button>
                <button className="Symbol" name="square" onClick= {this.buttonPressed}>x²</button>
                <button className="Symbol" name="ln" onClick= {this.buttonPressed}>ln</button>
                <button className="Symbol" name="pi" onClick= {this.buttonPressed}>π</button>
                <button className="Symbol" name="sin" onClick= {this.buttonPressed}>sin</button>
                <button className="Symbol" name="cos" onClick= {this.buttonPressed}>cos</button>
                <button className="Symbol" name="tan" onClick= {this.buttonPressed}>tan</button>
                <button className="Symbol" name="sign" onClick= {this.buttonPressed}>±</button>


            </div>
        );
    }  
}

export default Keypad;
