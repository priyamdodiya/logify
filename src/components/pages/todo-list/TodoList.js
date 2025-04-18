import React, { useState } from 'react';
import "./Todo.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [submitValue, setSubmitValue] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
  const addTask = () => {
    if (inputValue.trim() === "") {
      toast.error("input field can not be empty!", {
        position: "bottom-center"
      })
    }else if (editIndex !== null) {
      const updatedTasks = submitValue.map((task, index) =>
        index === editIndex ? inputValue : task
      );
      setSubmitValue(updatedTasks);
      setInputValue("");
      setEditIndex(null);
      toast.success("Task updated successfully!", {
        position: "bottom-center",
      });
    }
    else {
      setSubmitValue([...submitValue, inputValue]);
      setInputValue("");
      toast.success("submitted successfully!", {
        position: "bottom-center"
      })
    }
  }
  const deleteTask = (index) =>{
    const deletedTask = submitValue.filter((_,i)=>i !== index);
    setSubmitValue(deletedTask);
    toast.info("Task deleted successfully!",{
      position : "bottom-center"
    });
  }
  const edit = (index) => {
    setInputValue(submitValue[index]);
    setEditIndex(index)
  }
  return (
    <div className='container' id="About">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          className="input-box"
          placeholder="Enter a task..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask} >
        {editIndex !== null ? "Update Task" : "Add Task"} 
        </button>
        <ToastContainer />
      </div>
      <ul className='todo-list'>
        {submitValue.map((value, index) => (
          <li className='todo-item' key={index}>
            <span className='todo-text'>{value}</span>
            <div className='todo-actions'>
              <button
                className='edit'
                onClick={()=>edit(index)}
              >
                Edit
              </button>
              <button
                className='delete'
                onClick={()=>deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;