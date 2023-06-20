import React from "react";

function Mouth({ setMouth, total }) {
  const imageFolderUrl = "images/mouths/";
  return (
    <div className="list-section">
      <h2>Mouth</h2>
      <div className="list">
        <div className="clickable square">
          <img
            src={`${imageFolderUrl}a.png`}
            alt=""
            height="120"
            className="img-center"
            style={{ top: "50%" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Mouth;
