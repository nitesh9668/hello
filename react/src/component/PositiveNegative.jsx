import React, { useRef, useState } from 'react'

const PositiveNegative = () => {
    const num=useRef(0);
    const [result,setResult]=useState('');
    const check=()=>{
        const number=parseInt(num.current.value);
        if (number<0) {
            setResult('Negative Number');
            }
        else if(number>0){
            setResult('Positive Number');

        }
        else{
            setResult('the Numberis Zero');
        }
    }
  return (
    <div>
      <input type="number" ref={num} placeholder='enter a number' />
      <button onClick={check}>check</button>
      <p>{result}</p>
    </div>
  )
}

export default PositiveNegative
