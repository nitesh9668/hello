import React, { useState } from 'react'
const CrudOperation = () => {
  const [Taskname, setTaskname] = useState('');
  const [TaskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTaskname, setEditTaskname] = useState('');

  const handleCreate = () => {
    if (!Taskname.trim()) return;
    setTaskList([...TaskList, { Taskname }]);
    setTaskname('');
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTaskname(TaskList[index].Taskname);
  };

  const handleSave = (index) => {
    const updatedTasks = [...TaskList];
    updatedTasks[index].Taskname = editTaskname;
    setTaskList(updatedTasks);
    setEditIndex(null);
    setEditTaskname('');
  };

  const handleDelete = (index) => {
    const updatedTasks = TaskList.filter((task, i) => i !== index);
    setTaskList(updatedTasks);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter task"
        onChange={(e) => setTaskname(e.target.value)}
        value={Taskname}
      />
      <button onClick={handleCreate}>Add Task</button>

      <ul>
        {TaskList.length === 0 ? (
          <li>no task is added</li>
        ) : (
          TaskList.map((Task, index) => (
            <li key={index}>
              {index + 1}.{" "}
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editTaskname}
                    onChange={(e) => setEditTaskname(e.target.value)}
                  />
                  <button onClick={() => handleSave(index)}>Save</button>
                </>
              ) : (
                <>
                  {Task.Taskname}
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};



export default CrudOperation