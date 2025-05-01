import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
        const token = localStorage.getItem('token');
        try {
            const res = await axios.get('http://localhost:5000/api/projects', {
            headers: { Authorization: `Bearer ${token}` },
            });
            setProjects(res.data);
        } 
        catch (err) {
            alert('Unauthorized or error fetching projects');
        }
    };
    fetchProjects();
  }, []);

    return (
        <div>
            <h1>Your Projects</h1>
            <ul>
                {projects.map((project, idx) => (
                <li key={idx}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
}