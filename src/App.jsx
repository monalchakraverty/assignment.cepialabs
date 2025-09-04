import { useState } from "react";
import { sculptureList } from "./data";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex((index + 1) % sculptureList.length);
    setShowMore(false);
  }

  let sculpture = sculptureList[index];

  function handleImageClick() {
    setShowMore(!showMore); 
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

      {}
      {!showMore && (
        <p style={{ marginBottom: "10px", fontWeight: "bold", color: "gray" }}>
          Click the image below for more information.
        </p>
      )}

      {}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
        style={{ maxWidth: "400px", cursor: "pointer", borderRadius: "8px" }}
        onClick={handleImageClick}
      />

      {}
      {showMore && <p style={{ marginTop: "15px" }}>{sculpture.description}</p>}
    </div>
  );
}

export default App;
