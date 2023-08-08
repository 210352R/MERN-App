import React from "react";
import "../styles/addImage.css";
import axios from "axios";
import { useState } from "react";

export default function AddImage() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("desc", desc);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:8000/image/save", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Image uploaded successfully!");
      // You can add a state update or a redirect here
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="container">
      <h1>
        <i class="fa-solid fa-book-open"></i> &nbsp; Upload your Image ---
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
        />
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
