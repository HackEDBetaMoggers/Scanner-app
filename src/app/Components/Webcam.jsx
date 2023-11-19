


"use client"
import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import axios from "axios";

const CustomWebcam = () => {
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);

    // Posts data
    const post_data = () => {
      if (image == null) {
        console.log("Test")
        return "Please take a photo of receipt before submitting"
      }

      else {
        console.log("sucess")
        axios.post("/process", {
          image_as_str: image
        })
      }
    }

    // Fetch receipt data
    async function fetch_data() {
      const res = await axios.get("/process")
      console.log(res)
    }

  return (
    <div className="text-center text-black">
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
      <img style={{ width: "25%", margin: "auto" }} src={image}/>
      
      
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center my-10"
        onClick={() => {
          post_data()
        }}
      >
        Post Receipt

      </button>
      <br/>

    </div>
  );
};

export default CustomWebcam;

