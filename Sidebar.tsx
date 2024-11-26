import React, { useState } from "react";

type SidebarProps = { 
  onAdd: (photo: { // Function where photos will be added
    id: number;
    title: string;
    location: string;
    date: string;
    imageUrl: string;
  }) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onAdd }) => {
  const [title, setTitle] = useState(""); //Stores the values for the title, location, date & image
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAdd = () => { // Function for the Add button
    if (title && location && date && imageUrl) { // Makes sure all fields are filled
      onAdd({
        id: Date.now(), // Creates id after the date is entered
        title,
        location,
        date,
        imageUrl,
      });
      // Clears the form after adding
      setTitle("");
      setLocation("");
      setDate("");
      setImageUrl("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Event updates the title state
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)} // Event updates the location state
        className="form-control mb-2"
      />
      <input
        type="date" // Lets user pick up a date
        value={date}
        onChange={(e) => setDate(e.target.value)} 
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="form-control mb-2"
      />
      <button onClick={handleAdd} className="btn btn-success"> 
        Add
      </button>
    </div>
  ); 
};

export default Sidebar;

