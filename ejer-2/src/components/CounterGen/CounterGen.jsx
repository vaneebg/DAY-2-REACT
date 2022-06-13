import './CounterGen'
import { useState } from "react";


const CounterGen = ({iValue,dec,inc,mult}) => {
const [counter, setCounter] = useState(iValue);
const decrement = () => {
    setCounter(counter - dec);
    };
const increment = () => {
    setCounter(counter + inc);
    };
const multi = () => {
    setCounter(counter * mult);
    };
    
const reset =()=>{
    setCounter(iValue)
    };
return (
    <div className="general">
        <h1>Contador general: {counter}</h1>
        <button onClick={increment}>Incrementar</button>
        <button onClick={multi}>Multiplicar</button>
        <button onClick={decrement}>Decrementar</button>
        <button onClick={reset}>Reset</button>
    </div>
)
};


export default CounterGen;



// import React, { Component } from 'react'

// export class CounterGen extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             counter: this.props.iValue
//         }
//     }

//     incrementar = () => {
//         this.setState({counter: this.state.counter + this.props.inc})
//     }  
//     decremento = () => {
//             this.setState({counter: this.state.counter - this.props.inc})
//         }
//     multi = () => {
//                 this.setState({counter: this.state.counter * this.props.mult})
//             }
//     reset=()=>{
//                 this.setState({counter:this.props.iValue})
//             }

//   render() {
//     return (
//          <div className="general">
//             <h1>Contador general: {this.state.counter}</h1>
//             <button onClick={this.incrementar}>Incrementar</button>
//             <button onClick={this.multi}>Multiplicar</button>
//             <button onClick={this.decremento}>Decrementar</button>
//             <button onClick={this.reset}>Reset</button>
//         </div>
//     )
//   }
// }

// export default CounterGen