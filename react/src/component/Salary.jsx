import React, { useRef, useState } from 'react'

const Salary = () => {
    const sal=useRef(0);
    const [br,setBr]=useState(0);
    const [hra,setHra]=useState(0);
    const [da,setDa]=useState(0);
    const [tsal,setTsal]=useState(0);
    const getSal=()=>{
        // 
          const salary = parseFloat(sal.current.value) || 0; // handle empty input
    const brVal = salary * 0.05;
    const hraVal = salary * 0.1;
    const daVal = salary * 0.2;
    const total = salary + brVal + hraVal + daVal;

    setBr(brVal);
    setHra(hraVal);
    setDa(daVal);
    setTsal(total);
    }

  return (
    <div>
    <input type="number" ref={sal} placeholder='enter your current CTC' />
    <button onClick={getSal}>SalaryInHand</button> <br />
    <p>total BR:{br}</p>
    <p>total hra:{hra}</p>
    <p>tota da:{da}</p>
    <p>total Tsal:{tsal}</p>
      
    </div>
  )
}

export default Salary
