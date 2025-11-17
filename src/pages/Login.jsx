import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder for login logic
    console.log('Logging in with:', email, password);
    // Redirect to home for now
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Login</h1>
        <div className="grid grid-cols-1 gap-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-md bg-gray-700 text-white"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-md bg-gray-700 text-white"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white w-full px-6 py-3 rounded-md hover:bg-blue-600 transition-colors mt-6">Login</button>
        <p className="text-center mt-4 text-gray-400">
          Don't have an account? <Link to="/register" className="text-blue-400 hover:underline">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
