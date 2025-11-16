import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">SYNTAXBEAST</Link>
        <div className="flex gap-4">
            <Link to="/" className="text-white hover:text-gray-300 transition-colors">Marketplace</Link>
            <Link to="/admin" className="text-white hover:text-gray-300 transition-colors">Admin</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;