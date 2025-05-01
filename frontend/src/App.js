import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from "./pages/Login.jsx";
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
