import React from "react";

function Hat({ setHat, total }) {
  const imageFolderUrl = "images/accessories/hats/";
  return (
    <div className="list-section">
      <h2>Hat</h2>
      <div className="list">
        <div className="clickable square">
          <img
            src={`${imageFolderUrl}9.png`}
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

export default Hat;
