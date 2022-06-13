import './CounterDec'
import { useState } from "react";


const CounterDec = ({iValue,dec}) => {
const [counter, setCounter] = useState(iValue);
const decrement = () => {
    setCounter(counter - dec);
    };
return (
    <div className="decrement">
        <h2>Contador decremento: {counter}</h2>
        <button onClick={decrement}>Decrementar</button>
    </div>
)
};

export default CounterDec;