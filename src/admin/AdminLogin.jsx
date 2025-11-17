import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you'd verify credentials and set a token
    if (email === 'beastcodes27@gmail.com' && password === 'BEAST27') {
      localStorage.setItem('isAdmin', 'true');
      window.dispatchEvent(new Event('storage')); // Manually trigger storage event to update header
      navigate('/admin');
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">Admin Login</h1>
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
        <button type="submit" className="bg-red-500 text-white w-full px-6 py-3 rounded-md hover:bg-red-600 transition-colors mt-6">Admin Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
