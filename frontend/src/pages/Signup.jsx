import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Signup() {

  const [formData, setFormData] = useState({ name: '', email: '', password: '', country: '' });

  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData,  [e.target.name]: e.target.value  });

  const handleSubmit = async(e) => {
    e.preventDefault();

        try {

            await axios.post('http://localhost:5000/api/auth/signup', formData);
            navigate('/');
        } 
        catch (err) {
            
             alert('Signup failed');
        }
    };


return (
    
    <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <input name="country" placeholder="Country" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
    </form>
  );
}
