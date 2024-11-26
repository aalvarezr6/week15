import React, { useState } from "react";

type PhotoItemProps = { //Photo's data
  photo: {
    id: number;
    title: string;
    location: string;
    date: string;
    imageUrl: string;
  };
  onDelete: (id: number) => void; // Deletes corresponding photo
  onUpdate: (photo: { // Updates data
    id: number;
    title: string;
    location: string;
    date: string;
    imageUrl: string;
  }) => void;
};
// Component's state for editing the mode and form fields

const PhotoItem: React.FC<PhotoItemProps> = ({ photo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(photo.title);
  const [location, setLocation] = useState(photo.location);
  const [date, setDate] = useState(photo.date);
  const [imageUrl, setImageUrl] = useState(photo.imageUrl);

  const handleUpdate = () => { //Updates the photo
    onUpdate({ id: photo.id, title, location, date, imageUrl });
    setIsEditing(false);
  };

// Allows user to edit
  return (
    <div className="col-4 mb-4">
      {isEditing ? (
        <div className="card p-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Updates the title state whenever is edited 
            className="form-control mb-2"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-control mb-2"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control mb-2"
          />
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="form-control mb-2"
          />
          <button className="btn btn-primary w-100" onClick={handleUpdate}>
            Save
          </button>
        </div>
      ) : (

    // Displays the photo's details
        <div className="card">
          <img src={photo.imageUrl} alt={photo.title} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{photo.title}</h5>
            <p className="card-text">{photo.location}</p>
            <p className="card-text">{photo.date}</p>
            <button
              className="btn btn-danger me-2"
              onClick={() => onDelete(photo.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditing(true)}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoItem;

  