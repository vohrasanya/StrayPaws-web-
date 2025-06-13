import React, { useState } from "react";
import "./Rescue.css";
import { assets } from '../../assets/assets'

const RescueForm = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="rescue-container">
      <div className="form-header">
        <h1>Add Rescue Details</h1>
        <p>
          Please fill in the details of the animal rescue. Upload a picture to
          help us identify and assist better.
        </p>
      </div>

      <div className="rescue-form">
        <label className="form-label">Animal Name</label>
        <input type="text" placeholder="Enter the animal's name" className="form-input" />

        <label className="form-label">Location</label>
        <input type="text" placeholder="Enter rescue location" className="form-input" />

        <label className="form-label">Description</label>
        <textarea
          placeholder="Provide details about the rescue"
          className="form-textarea"
        ></textarea>

        <label className="form-label">Upload Picture</label>
        <div className="upload-section">
          <div className="upload-box">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="image-preview" />
            ) : (
              <p>Drag and drop a file or click to select</p>
            )}
            <input
              type="file"
              accept="image/*"
              className="file-input"
              onChange={handleImageUpload}
            />
          </div>
        </div>

        <button className="submit-button">Submit Rescue Details</button>
      </div>
    </div>
  );
};

export default RescueForm;
