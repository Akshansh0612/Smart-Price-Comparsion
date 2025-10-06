import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const CameraCapture = ({ setResult }) => {
  const webcamRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const captureAndSend = async () => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/scan", {
        image: imageSrc,
      });
      setResult(response.data);
    } catch (err) {
      console.error("Error sending image to backend:", err);
      alert("Failed to scan product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
        height={300}
        videoConstraints={{ facingMode: "environment" }}
      />
      <br />
      <button
        onClick={captureAndSend}
        disabled={loading}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        {loading ? "Scanning..." : "Scan Product"}
      </button>
    </div>
  );
};

export default CameraCapture;
