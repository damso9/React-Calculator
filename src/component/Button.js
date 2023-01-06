import React from 'react';

const Button = ({text,style, handleClick, addNumber, divideNumber, subtractNumber, multiplyNumber, calculate}) => {
  return (
    <div>
      <button className={style } onClick={
        (e) => {
            handleClick && handleClick(e)
            addNumber && addNumber()
            calculate && calculate()
            divideNumber && divideNumber()
            subtractNumber && subtractNumber()
            multiplyNumber && multiplyNumber()
        }
      }>{text}</button>
    </div>
  );
}

export default Button;
