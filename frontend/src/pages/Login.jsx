import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();
  
    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const handleSubmit = async e => {
        e.preventDefault();
        
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            alert('Login failed');
        }

    };



 
    return (
        <form onSubmit={handleSubmit} className="card p-4 shadow" style={{ maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
            <h4 className="mb-3">Login</h4>
            <div className="mb-3">
                <label>Email</label>
                <input 
                    type="email" 
                    name="email"
                    className="form-control" 
                    value={formData.email}
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input 
                    type="password" 
                    name="password"
                    className="form-control" 
                    value={formData.password}
                    onChange={handleChange} 
                    required 
                />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
    );


}
