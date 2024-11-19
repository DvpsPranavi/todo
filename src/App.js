// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import TodoList from './components/TodoList';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header with Navigation Menu */}
        <header className="header">
          <h1 className="logo">My Website</h1>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/todo" className="nav-link">To-Do List</Link>
            <Link to="/profile" className="nav-link">User Profile</Link>
          </nav>
        </header>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;
