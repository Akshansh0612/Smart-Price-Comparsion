import React, { useState } from "react";
import CameraCapture from "./components/CameraCapture.jsx";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Smart Price Scanner</h1>
      <CameraCapture setResult={setResult} />
      
      {result && (
        <div style={{ marginTop: "30px" }}>
          <h2>Product: {result.productName}</h2>
          <h3>
            Cheapest Price: ₹{result.cheapestPrice} on {result.cheapestSite}
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;
