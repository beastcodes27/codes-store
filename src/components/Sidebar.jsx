import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaPlus, FaSignOutAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin" end className={({ isActive }) => `flex items-center gap-2 p-2 rounded-md ${isActive ? "bg-gray-700" : ""}`}>
              <FaTachometerAlt />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/create" className={({ isActive }) => `flex items-center gap-2 p-2 rounded-md ${isActive ? "bg-gray-700" : ""}`}>
              <FaPlus />
              <span>Create Project</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-4">
        <button className="flex items-center gap-2 p-2 rounded-md hover:bg-red-500">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;