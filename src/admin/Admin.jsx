import useProjectStore from "../hooks/useProjectStore";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

function Admin() {
  const { projects, deleteProject } = useProjectStore();

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Manage Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-700 rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 truncate">{project.description}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-bold">${project.price}</p>
                <div className="flex gap-2">
                  <Link to={`/admin/edit/${project.id}`} className="text-blue-400 hover:text-blue-300"><FaEdit /></Link>
                  <button onClick={() => deleteProject(project.id)} className="text-red-400 hover:text-red-300"><FaTrash /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;