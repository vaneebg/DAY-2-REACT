import './CounterInc'
import { useState } from "react";


const CounterInc = ({iValue,inc}) => {
const [counter, setCounter] = useState(iValue);
const increment = () => {
    setCounter(counter + inc);
    };
return (
    <div className="increment">
        <h2>Contador incremento: {counter}</h2>
        <button onClick={increment}>Incrementar</button>
    </div>
    )
};


export default CounterInc;


// import React, { Component } from 'react'

// export class CounterInc extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             counter: this.props.iValue
//         }
//     }
//     incrementar = () => {
//         this.setState({counter: this.state.counter + this.props.inc})
//     }  
//   render() {
//     return (
//         <div>
//             <h2>Contador incremento: {this.state.counter} </h2>
//             <br />
//             <button onClick={this.incrementar}>Incrementar</button>
//         </div>
     
//     )
//   }
// }

// export default CounterInc