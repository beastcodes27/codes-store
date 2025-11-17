import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Placeholder for registration logic
    console.log('Registering with:', email, password);
    // Redirect to login for now
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form onSubmit={handleRegister} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Register</h1>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-3 rounded-md bg-gray-700 text-white"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white w-full px-6 py-3 rounded-md hover:bg-green-600 transition-colors mt-6">Register</button>
        <p className="text-center mt-4 text-gray-400">
          Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
