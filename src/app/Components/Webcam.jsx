


"use client"
import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import axios from "axios";

const CustomWebcam = () => {
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);

    const image_rendering = () => {
        if (image) {
            <img style={{ width: "25%", margin: "auto" }} src={image} alt="Taken photo" />
        }

        else {
            <h2>No image taken</h2>
        }
    }

    // Posts data
    const post_data = () => {
      axios.post("/user", {
        photo: image
      })
    }

  return (
    <div className="text-center">
      <div style={{ width: "25%", margin: "auto" }}>
        {/* Adjust the width and height styles to set the camera size */}
        <Camera
          style={{ width: "100%", height: "100%" }}
          ref={camera}
          numberOfCamerasCallback={setNumberOfCameras}
          aspectRatio={1} // Set to 1 for a square aspect ratio (width = height)
        />
      </div>

      
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center my-10"
        onClick={() => {
          const photo = camera.current.takePhoto();
          setImage(photo);
        }}
      >
        Take photo
      </button>

        
      <img style={{ width: "25%", margin: "auto" }} src={image} alt="Taken photo" />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center my-10"
        onClick={() => {
          axios.post("/process", {
            // photo: image
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        
        }}
      >
        Fetch Data
      </button>

      
      <p></p>

    </div>
  );
};

export default CustomWebcam;

