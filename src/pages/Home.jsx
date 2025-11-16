import useProjectStore from "../hooks/useProjectStore";
import { Link } from "react-router-dom";

function Home() {
  const { projects } = useProjectStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4 truncate">{project.description}</p>
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">${project.price}</p>
                <Link to={`/project/${project.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">View Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;