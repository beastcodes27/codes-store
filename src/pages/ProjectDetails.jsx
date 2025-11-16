import { useParams } from "react-router-dom";
import useProjectStore from "../hooks/useProjectStore";

function ProjectDetails() {
  const { id } = useParams();
  const { projects } = useProjectStore();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-96 object-cover"/>
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <p className="text-2xl font-bold mb-4">${project.price}</p>
            <div className="flex gap-4">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">Live Demo</a>
                <a href={project.downloadLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">Download</a>
            </div>
        </div>
    </div>
  );
}

export default ProjectDetails;