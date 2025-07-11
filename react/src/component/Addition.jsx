import React, { useRef, useState } from 'react'

const Addition = () => {
    const fnum=useRef(0);
    const lnum=useRef(0);
    const [sum,setSum]=useState(0);
    const getSum=()=>{
        setSum(parseInt(fnum.current.value)+parseInt(lnum.current.value));
    }
  return (
    <div>
    <p>{sum}</p>
      <input type="number" ref={fnum} placeholder='enter first number' />
      <input type="number" ref={lnum} placeholder='enter second number' />
      <button onClick={getSum}>sum</button>
    </div>
  )
}

export default Addition;
