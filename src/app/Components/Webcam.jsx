"use client"

import React, { useState, useRef } from "react";
import {Camera} from "react-camera-pro";

const CustomWebcam = () => {
    const camera = useRef(null);
    const [numberOfCameras, setNumberOfCameras] = useState(0);
    const [image, setImage] = useState(null);
  
    return (
        <div className="text-center">
            <div>
                <Camera className="h-5" ref={camera} numberOfCamerasCallback={setNumberOfCameras} aspectRatio={16 / 9}/>
            </div>
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center"
                onClick={() => {
                    const photo = camera.current.takePhoto();
                    setImage(photo);
                }}>
                Take photo
            </button>
            
            <img src={image} alt='Taken photo'/>
        </div>
    );
};

export default CustomWebcam