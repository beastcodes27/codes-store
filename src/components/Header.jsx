import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = () => {
      const adminStatus = localStorage.getItem('isAdmin') === 'true';
      setIsAdmin(adminStatus);
    };

    checkAdminStatus();

    window.addEventListener('storage', checkAdminStatus);

    return () => {
      window.removeEventListener('storage', checkAdminStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    window.dispatchEvent(new Event('storage')); // Trigger re-render
    navigate('/admin/login');
  };

  return (
    <header className="bg-gray-800 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">SYNTAXBEAST</Link>
        <div className="flex gap-4 items-center">
          <Link to="/" className="text-white hover:text-gray-300 transition-colors">Marketplace</Link>
          
          {isAdmin ? (
            <>
              <Link to="/admin" className="text-white hover:text-gray-300 transition-colors">Admin</Link>
              <button 
                onClick={handleLogout} 
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-gray-300 transition-colors">Login</Link>
              <Link to="/register" className="text-white hover:text-gray-300 transition-colors">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;