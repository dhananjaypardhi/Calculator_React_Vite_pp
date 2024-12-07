import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import  './App.css'

function App() {
  
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const add = () => {
    setResult(Number(num1) + Number(num2));
  setNum1('');
  setNum2('');
  };
  const Singlef = (operator) => {
    
  };
  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  setNum1('');
  setNum2('');
  };
  const multiply = () =>{
  setResult(Number(num1) * Number(num2));
  setNum1('');
  setNum2('');
  };
  const divide = () =>{ 
    setResult(Number(num1) / Number(num2));
  setNum1('')
  setNum2('');
  };                                                                                                   

  return (
    <div>
      
      <h3>Calculator</h3>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="First number"/>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Second number"/><br /><br />

      <div>
        <button onClick={add}>(+)</button>
        <button onClick={subtract}>(-)</button>
        <button onClick={multiply}>(*)</button>
        <button onClick={divide}>(/)</button>
        
      </div>
      
        <h2>output:- {result}</h2>
      
    </div>
    )
}

export default App 
