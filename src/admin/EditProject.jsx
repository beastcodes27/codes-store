import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProjectStore from "../hooks/useProjectStore";

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, updateProject } = useProjectStore();
  const project = projects.find((p) => p.id === id);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setDescription(project.description);
      setPrice(project.price);
      setImage(project.image);
      setDemoLink(project.demoLink);
      setDownloadLink(project.downloadLink);
    }
  }, [project]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProject = {
      id,
      title,
      description,
      price: parseFloat(price),
      image,
      demoLink,
      downloadLink,
    };
    updateProject(updatedProject);
    navigate("/admin");
  };

  if (!project) return <p>Project not found!</p>;

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Edit Project</h1>
      <div className="grid grid-cols-1 gap-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded-md bg-gray-700"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 rounded-md bg-gray-700 h-32"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-2 rounded-md bg-gray-700"
        />
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="p-2 rounded-md bg-gray-700"
        />
        <input
          type="text"
          value={demoLink}
          onChange={(e) => setDemoLink(e.target.value)}
          className="p-2 rounded-md bg-gray-700"
        />
        <input
          type="text"
          value={downloadLink}
          onChange={(e) => setDownloadLink(e.target.value)}
          className="p-2 rounded-md bg-gray-700"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors mt-6">Update Project</button>
    </form>
  );
}

export default EditProject;