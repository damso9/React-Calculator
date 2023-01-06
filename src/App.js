import { useState } from 'react';
import './App.css';
import { CalcButton } from './component/CalcButton';
import FormInput from './component/CalcInput';

function App() {
  const [display, setDisplay] = useState('');
  const [operation, setOperation] = useState('');
  const [num1, setNum1] = useState('');

  const addNumber = () => {
    setNum1(parseInt(display));
    setDisplay('');
    setOperation('addition');
  };
  const subtractNumber = () => {
    setNum1(parseInt(display));
    setDisplay('');
    setOperation('subtraction');
  };
  const multiplyNumber = () => {
    setNum1(parseInt(display));
    setDisplay('');
    setOperation('multiplication');
  };
  const divideNumber = () => {
    setNum1(parseInt(display));
    setDisplay('');
    setOperation('division');
  };

  const handleClick = (e) => {
    setDisplay((prev) => {
      return prev + e.target.textContent;
    });
    console.log(typeof e.target.textContent);
  };
  const calculate = () => {
    switch (operation) {
      case 'addition':
        console.log('addition');
        setDisplay((prev) => {
          let result = parseInt(prev) + num1;
          return result;
        });
        break;
      case 'subtraction':
        setDisplay((prev) => {
          let result = num1 - parseInt(prev);
          return result;
        });
        break;
      case 'division':
        setDisplay((prev) => {
          let result = num1 / parseInt(prev);
          return result;
        });
        break;
      case 'multiplication':
        setDisplay((prev) => {
          let result = parseInt(prev) * num1;
          return result;
        });
        break;
      default:
        break;
    }
  };

  // show output
  return (
    <div className='App'>
      <div className='calcWidth'>
        <FormInput display={display} />
        <CalcButton
          handleClick={handleClick}
          addNumber={addNumber}
          subtractNumber={subtractNumber}
          divideNumber={divideNumber}
          multiplyNumber={multiplyNumber}
          calculate={calculate}
        />
      </div>
    </div>
  );
}

export default App;
