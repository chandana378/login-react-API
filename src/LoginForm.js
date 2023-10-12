import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <table className="chan">
      <tbody>
        <tr>
          <td><label><b>Email:</b></label></td>
          <td><input type="email" value={email} onChange={handleEmailChange} /></td>
        </tr>
        <tr>
          <td><label><b>Password:</b></label></td>
          <td><input type="password" value={password} onChange={handlePasswordChange} /></td>
        </tr>
        <tr>
          <td><label><b>Confirm Password:</b></label></td>
          <td><input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} /></td>
        </tr>
        <tr>
          <td></td>
          <td><button type="submit" onClick={handleSubmit}>Login</button></td>
        </tr>
      </tbody>
    </table>
  );
}

export default LoginForm;
