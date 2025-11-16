import useProjectStore from "../hooks/useProjectStore";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const { projects, deleteProject } = useProjectStore();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Link to="/admin/create" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">Add Project</Link>
      </div>
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Price</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-700">
                <td className="p-2">{project.title}</td>
                <td className="p-2">${project.price}</td>
                <td className="p-2 flex gap-2">
                  <Link to={`/admin/edit/${project.id}`} className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition-colors">Edit</Link>
                  <button onClick={() => deleteProject(project.id)} className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;