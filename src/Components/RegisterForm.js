import React from 'react';
import './AuthForm.css';

function RegisterForm() {
  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
