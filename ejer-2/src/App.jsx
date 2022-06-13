import './App.css';
import CounterInc from './components/CounterInc/CounterInc'
import CounterDec from './components/CounterDec/CounterDec'
import CounterGen from './components/CounterGen/CounterGen'




function App() {
  return (
    <div className="App">
      <h1>Contadores</h1>
     <CounterInc iValue={2} inc={2}/>
     <CounterDec iValue={10} dec={3}/>
     <CounterGen iValue={30} inc={2} dec={1} mult={2}/>
    </div>
  );
}

export default App;
