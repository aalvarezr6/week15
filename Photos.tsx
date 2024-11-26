import React, { useState } from "react";

type Photo = {  // Defines the photo object
  id: number;
  title: string;
  location: string;
  date: string;
  imageUrl: string;
};

type PhotosProps = { // These are the props for the Photos component
  photos: Photo[];
  onDelete: (id: number) => void;
  onUpdate: (updatedPhoto: Photo) => void;
};

const Photos: React.FC<PhotosProps> = ({ photos, onDelete, onUpdate }) => { // Receives these props
  const [editingId, setEditingId] = useState<number | null>(null); // Stores the id of the photo updating
  const [editPhoto, setEditPhoto] = useState<Photo | null>(null); // Stores the current photo

  const handleEditClick = (photo: Photo) => { // Function trigerred when a photo is edited
    setEditingId(photo.id);  
    setEditPhoto(photo);
  };

  const handleSaveClick = () => {
    if (editPhoto) { 
      onUpdate(editPhoto); // onUpdate function passed from App.tsx
      setEditingId(null); // Clears the editPhoto state 
    }
  };

  return ( // Renders the photo cards
    // Loops photos array and renders each photo in a card
    <div className="d-flex flex-wrap justify-content-start"> 
      {photos.map((photo) => (
        <div
          key={photo.id} //Each photo gets an id
          className="card m-2"
          style={{ width: "18rem", height: "24rem" }} 
        >
          <img
            src={photo.imageUrl}
            className="card-img-top"
            alt={photo.title}
            style={{ height: "12rem", objectFit: "cover" }}
          />
          <div className="card-body">
            {editingId === photo.id ? (  // Allows editing of each image
              <>
                <input
                  type="text"
                  className="form-control mb-2"
                  value={editPhoto?.title || ""}
                  onChange={(e) =>
                    setEditPhoto({ ...editPhoto!, title: e.target.value })
                  }
                  placeholder="Title"
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  value={editPhoto?.location || ""}
                  onChange={(e) =>
                    setEditPhoto({ ...editPhoto!, location: e.target.value })
                  }
                  placeholder="Location"
                />
                <input
                  type="date"
                  className="form-control mb-2"
                  value={editPhoto?.date || ""}
                  onChange={(e) =>
                    setEditPhoto({ ...editPhoto!, date: e.target.value })
                  }
                />
              </>
            ) : (
            // Displays title, location and date
              <>
                <h5 className="card-title">{photo.title}</h5>
                <p className="card-text">{photo.location}</p>
                <p className="card-text">{photo.date}</p>
              </>
            )}
          </div>
          <div className="card-footer d-flex justify-content-between">
            {editingId === photo.id ? (
              <button
                className="btn btn-success btn-sm"
                onClick={handleSaveClick} // Saves the changes made in updating
              >
                Save
              </button>
            ) : (
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => handleEditClick(photo)}
              >
                Update
              </button>
            )}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(photo.id)} //Deletes photo
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photos;

