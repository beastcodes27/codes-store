import { useState } from "react";
import useProjectStore from "../../hooks/useProjectStore";
import { v4 as uuidv4 } from 'uuid';

function CreateProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const addProject = useProjectStore((state) => state.addProject);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: uuidv4(),
      title,
      description,
      price: parseFloat(price),
      image,
      demoLink,
      downloadLink,
    };
    addProject(newProject);
    // Clear form
    setTitle("");
    setDescription("");
    setPrice("");
    setImage("");
    setDemoLink("");
    setDownloadLink("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Create New Project</h1>
      <div className="grid grid-cols-1 gap-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded-md bg-gray-700"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 rounded-md bg-gray-700 h-32"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-2 rounded-md bg-gray-700"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="p-2 rounded-md bg-gray-700"
        />
        <input
          type="text"
          placeholder="Demo Link"
          value={demoLink}
          onChange={(e) => setDemoLink(e.target.value)}
          className="p-2 rounded-md bg-gray-700"
        />
        <input
          type="text"
          placeholder="Download Link"
          value={downloadLink}
          onChange={(e) => setDownloadLink(e.target.value)}
          className="p-2 rounded-md bg-gray-700"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors mt-6">Create Project</button>
    </form>
  );
}

export default CreateProject;