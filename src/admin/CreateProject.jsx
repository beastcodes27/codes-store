import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProjectStore from "../hooks/useProjectStore";

function CreateProject() {
  const navigate = useNavigate();
  const { addProject } = useProjectStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: Date.now().toString(),
      title,
      description,
      price,
      image,
      demoLink,
      downloadLink,
    };
    addProject(newProject);
    navigate("/admin");
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Add New Project</h1>
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-gray-700 p-2 rounded-md" />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-gray-700 p-2 rounded-md" />
                <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} className="bg-gray-700 p-2 rounded-md" />
                <input type="text" placeholder="Demo Link" value={demoLink} onChange={(e) => setDemoLink(e.target.value)} className="bg-gray-700 p-2 rounded-md" />
                <input type="text" placeholder="Download Link" value={downloadLink} onChange={(e) => setDownloadLink(e.target.value)} className="bg-gray-700 p-2 rounded-md" />
            </div>
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-gray-700 p-2 rounded-md w-full mt-4" rows="4"></textarea>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors mt-4">Add Project</button>
        </form>
    </div>
  );
}

export default CreateProject;