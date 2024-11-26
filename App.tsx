import React, { useState } from "react"; // React & useState are imported to manage the app's state
import Sidebar from "./Sidebar"; // Sidebar & Photos components are imported
import Photos from "./Photos";

type Photo = { // Photo objects are defined
  id: number;
  title: string;
  location: string;
  date: string;
  imageUrl: string;
};

const App: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]); // photos is the array for photo objects & setPhotos function updates the state

  // Add a new photo to the photos array & assigns id
  const addPhoto = (newPhoto: Photo) => {
    setPhotos([...photos, { ...newPhoto, id: photos.length + 1 }]);
  };

  // Deletes a photo
  const deletePhoto = (id: number) => {
    setPhotos(photos.filter((photo) => photo.id !== id));
  };

  // Updates a photo
  const updatePhoto = (updatedPhoto: Photo) => {
    setPhotos(
      photos.map((photo) => (photo.id === updatedPhoto.id ? updatedPhoto : photo))
    );
  };

// onAdd prop is used to pass the addPhoto to the Sidebar component. onDelete & onUpdate props to the Photos component.
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {}
      <div style={{ width: "20%", backgroundColor: "#f1c40f", padding: "10px" }}>
        <Sidebar onAdd={addPhoto} /> 
      </div>

      {}
      <div style={{ width: "80%", padding: "20px" }}>
        <h1 className="text-center bg-info text-white">My Travels</h1>
        <Photos photos={photos} onDelete={deletePhoto} onUpdate={updatePhoto} />
      </div>
    </div>
  );
};

export default App;


