import React, { useRef, useState } from 'react'

const StudentMark = () => {
    const mark1=useRef(0);
    const mark2=useRef(0);
    const mark3=useRef(0);
    const [result,setResult]=useState('');
    const grade=()=>{
        const sub1=parseInt(mark1.current.value);
        const sub2=parseInt(mark2.current.value);
        const sub3=parseInt(mark3.current.value);
        const perc=(sub1+sub2+sub3)/300*100;
        if (perc>=90) {
            setResult('A');
        } else if(perc>=70&& perc<90) {
            setResult('B')
        }
        else if(perc>=33&& perc<70){
            setResult('c')
    }
    else{
        setResult('Fail')
    }
}

  return (
    <div>
      <input type="number" ref={mark1} placeholder='Enter Subject One mark' />
            <input type="number" ref={mark2} placeholder='Enter 2nd Subject mark' />
          <input type="number" ref={mark3} placeholder='Enter 3rd Subject mark' />
          <button onClick={grade}>Check Grade</button>
          <p>{result}</p>


    </div>
  )
}


export default StudentMark
