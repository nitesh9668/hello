import React from 'react'

const StudentCrud = () => {
  const [studentname, setStudentName] = useState('');
  const [students, setStudents] = useState([]); // initialize as empty array

  const handleAddStudent = () => {
    if (!studentname.trim()) return;

    const newStudent = {
      studentname: studentname
    };

    setStudents([...students, newStudent]);
    setStudentName('');
  };

  return (
    <div>
      <input 
        type='text'
        placeholder='Enter a student name'
        onChange={(e) => setStudentName(e.target.value)}
        value={studentname}
      />
      <button onClick={handleAddStudent}>CREATE</button>

      <table border='1'>
        <tbody>
          <tr>
            <th>Student Number</th>
            <th>Student Name</th>
          </tr>
          {students.length === 0 ? (
            <tr>
              <td colSpan='2'>Student name not found..!</td>
            </tr>
          ) : (
            students.map((n, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{n.studentname}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};


export default StudentCrud
