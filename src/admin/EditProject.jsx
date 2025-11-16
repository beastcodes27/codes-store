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
      price,
      image,
      demoLink,
      downloadLink,
    };
    updateProject(updatedProject);
    navigate("/admin");
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Edit Project</h1>
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-gray-700 p-2 rounded-md" />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-gray-700 p-2 rounded-md" />
                <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} className="bg-gray-700 p-2 rounded-md" />
                <input type="text" placeholder="Demo Link" value={demoLink} onChange={(e) => setDemoLink(e.target.value)} className="bg-gray-700 p-2 rounded-md" />
                <input type="text" placeholder="Download Link" value={downloadLink} onChange={(e) => setDownloadLink(e.target.value)} className="bg-gray-700 p-2 rounded-md" />
            </div>
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-gray-700 p-2 rounded-md w-full mt-4" rows="4"></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mt-4">Update Project</button>
        </form>
    </div>
  );
}

export default EditProject;