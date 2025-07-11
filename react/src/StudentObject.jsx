import React, { useState } from 'react'

const StudentObject = () => {
    const [sname,setSname]=useState('');
    const [roll,setRoll]=useState('');
    const [course,setCourse]=useState('');
    const [fee,setFee]=useState('');
    const [empObj,setEmpObj]=useState([]);
    const handleStudent=()=>{
        const emp={
            sname,
            roll,
            course,
            fee
        };
        if(!sname.trim() ||!roll.trim() || !course.trim() || !fee.trim()) return ;
        setEmpObj([...empObj,emp]);
        setSname('');
        setRoll('');
        setCourse('');
        setFee('');

    }

    
  return (
    <div>
    <input type="text" placeholder='Enter Student Name'onChange={(e)=>setSname(e.target.value)} value={sname}/>
    <br />
    <input type="text" placeholder='Enter student Rollno' onChange={(e)=>setRoll(e.target.value)} value={roll}/>
    <br />
    <input type="text" placeholder='Enter course'onChange={(e)=>setCourse(e.target.value)} value={course} />
    <br />
    <input type="text" placeholder='fees details'onChange={(e)=>setFee(e.target.value)} value={fee} />
    <button onClick={handleStudent}>Add Student details</button>

    <table border={2}>
        <tbody>
        <tr>
            <th>sno</th>
            <th>Student name</th>
            <th>Student ROLL</th>
            <th>Student course</th>
            <th>course fee</th>
        </tr>
              {empObj.length===0?(<tr><td colSpan={5}>no student data entered!!</td></tr>):
              empObj.map((e,i)=>{
                return(
                    <tr>
                        <td>{i+1}</td>
                        <td>{e.sname}</td>
                        <td>{e.roll}</td>
                        <td>{e.course}</td>
                        <td>{e.fee}</td>
                    </tr>
                )
              })
              }

        </tbody>
    </table>

    </div>
  )
}

export default StudentObject
