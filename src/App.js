import React, { useState } from 'react';
import './style.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };
  const handler = (e)=>{
    setInput(e.target.value);
  }
  
  return (
    <div className="calculator">
      <h1 style={{color:'white',textAlign:'center'}}>Calculator</h1>
      <div className="display">
        <input type="text" value={input} onChange={handler} className='ty' />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
      <div className="row">
          <button className="clear" onClick={handleClear}>C</button>
          <button className="clear" onClick={()=>setInput(input.slice(0, -1))}>Del</button>
          <button onClick={() => handleButtonClick('00')}>00</button>
          <button onClick={() => handleButtonClick('%')}>%</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={handleCalculate} onChange={handler}>=</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
