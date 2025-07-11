import React, { useState } from 'react'

const Demo = () => {
  const [counter,setcounter]=useState(0);
  const Increment=()=>{
    setcounter(counter+1);
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={Increment}>inc</button>
    </div>
  )
}

export default Demo
