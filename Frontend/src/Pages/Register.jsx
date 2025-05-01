import React, { useState } from 'react';
import api from '../Services/api';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async e => {
    e.preventDefault();
    await api.post('/auth/register', form);
    alert('Registration successful');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input required placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input required type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
