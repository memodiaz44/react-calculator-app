import './App.css';
import Logo from "./image/logo.JPG"
import Button from './components/Button';
import Screen from './components/Screen';
import Clear from './components/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs' 

function App() {
  
const [input, setInput] = useState ('')

const addInput = val => {
  setInput(input + val)
};

const calcilateResult = () => {
  if (input) { 
  setInput(evaluate(input))
   }else {
    alert('please enter a value')
   }
}

  return (
    <div className="App">
      <div className='my-logo-conteiner'>
        <img
        src={Logo}
        className="my-logo"
        alt='my logo'  />
      </div>
      <div 
      className='calculator-conteiner'>
        <Screen input={input}/>
        
        <div className='fila'>
        <Button manageClick={addInput}>1</Button>
        <Button manageClick={addInput}>2</Button>
        <Button manageClick={addInput}>3</Button>
        <Button manageClick={addInput}>+</Button>
        </div>
        <div className='fila'>
        <Button manageClick={addInput}>4</Button>
        <Button manageClick={addInput}>5</Button>
        <Button manageClick={addInput}>6</Button>
        <Button manageClick={addInput}>-</Button>
        </div>
        <div className='fila'>
        <Button manageClick={addInput}>7</Button>
        <Button manageClick={addInput}>8</Button>
        <Button manageClick={addInput}>9</Button>
        <Button manageClick={addInput}>*</Button>
        </div>
        <div className='fila'>
        <Button manageClick={calcilateResult}>=</Button>
        <Button manageClick={addInput}>0</Button>
        <Button manageClick={addInput}>.</Button>
        <Button manageClick={addInput}>/</Button>
        </div>
        <div className='fila'>
          <Clear manageClick={() => setInput('')}>Clear</Clear> 
          </div>
        

      </div>

   
    </div>
  );
}

export default App;
