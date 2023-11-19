import React, { useState } from "react";

const UploadButton = ({ setImage }) => {

  const [selectedImage, setSelectedImage] = useState(null);

  function getBase64(file, onLoadCallback) {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.onload = function() { resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

  return (
    <React.Fragment>  
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          let base64 = getBase64(event.target.files[0]);
          base64.then(function(result) {
            setImage(result);
          });
        }}
      />
    </React.Fragment>    
  );
};

export default UploadButton;