import React, { useState } from 'react';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="app">
      <div className="form-toggle">
        <button onClick={() => setShowLogin(true)}>Login</button>
        <button onClick={() => setShowLogin(false)}>Register</button>
      </div>
      {showLogin ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}

export default App;
