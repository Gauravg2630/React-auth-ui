import React from 'react';
import './AuthForm.css';

function LoginForm() {
  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
