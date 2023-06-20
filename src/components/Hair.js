import React from "react";

function Hair({ setHair, total }) {
  const imageFolderUrl = "images/hair/";
  return (
    <div className="list-section">
      <h2>Hair</h2>
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

export default Hair;
