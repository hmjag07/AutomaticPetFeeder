import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Services/api';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await api.post('/auth/login', form);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('userId', res.data.userId);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input required placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input required type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
