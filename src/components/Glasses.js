import React from "react";

function Glasses({ setGlasses, total }) {
  const imageFolderUrl = "images/accessories/glasses/";
  return (
    <div className="list-section">
      <h2>Glasses</h2>
      <div className="list">
        <div className="clickable square">
          <img
            src={`${imageFolderUrl}1.png`}
            alt=""
            height="60"
            className="img-center"
            style={{ top: "50%" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Glasses;
