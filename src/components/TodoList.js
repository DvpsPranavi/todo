import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveTask = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: editingText } : task)));
    setEditingId(null);
    setEditingText('');
  };

  const filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        className="todo-input"
      />
      <button onClick={handleAddTask} className="todo-button">
        Add Task
      </button>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tasks"
        className="search-input"
      />
      <ul className="todo-list">
        {filteredTasks.map(task => (
          <li key={task.id} className={`todo-item ${task.completed ? 'completed' : ''}`}>
            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="todo-input"
                />
                <button onClick={() => saveTask(task.id)} className="save-button">Save</button>
                <button onClick={() => setEditingId(null)} className="cancel-button">Cancel</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleTaskCompletion(task.id)} className="task-text">
                  {task.text}
                </span>
                <button onClick={() => startEditing(task.id, task.text)} className="edit-button">Edit</button>
                <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
