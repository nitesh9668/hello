import React, { useRef, useState } from 'react'

const EvenOdd = () => {
    const num=useRef(0);
    const [result,setResult]=useState('');
    const check=()=>{
        const number=parseInt(num.current.value);
        if (number%2===0) {
            setResult('Even number');
            
        } else {
            setResult('Odd number');
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

export default EvenOdd
