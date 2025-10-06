import React, { useRef } from "react";
import Webcam from "react-webcam";

const CameraCapture = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
      />
      <button onClick={capturePhoto}>Capture Photo</button>
    </div>
  );
};

export default CameraCapture;
