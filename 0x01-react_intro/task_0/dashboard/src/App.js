import React from 'react';
import './App.css'; // Assuming you have some CSS for styling
import logo from './holberton_logo.jpg'; // Assuming you have a logo image

function App() {
  return (
    <div>
      {/* Header */}
      <div className="App-header">
        <img src = { logo } alt="Holberton logo"/>
        <h1>School dashboard</h1>
      </div>
      
      {/* Body */}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      
      {/* Footer */}
      <div className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </div>
    </div>
  );
}

export default App;

