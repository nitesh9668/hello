import React, { useState } from 'react'

const StudentTable = () => {
    const [student,setStudent]=useState('');
    const [students,setStudents]=useState([]);
    const handleStudent=()=>{
        if(!student.trim()) return;
        setStudents([...students,{student}]);
        setStudent('');
    }

  return (
    <div>
      <input type="text" placeholder='enter the Student Name ' onChange={(e)=>setStudent(e.target.value)} value={student}/>
      <button onClick={handleStudent}>Add Name</button>
      <table border={2}>
        <tbody>
            <tr>
            <th>student no.</th>
            <th>Student Name</th>
        </tr>
        
           {(students.length===0)?(<tr><td colSpan={2}>Student name not found!!</td></tr>):
           students.map((n,i)=>{
            return(
                <tr>
                    <td>{i+1}</td>
                    <td>{n.student}</td>
                </tr>
            )
           }
           )}
        
        </tbody>
      </table>
      </div>

  )
}

export default StudentTable
