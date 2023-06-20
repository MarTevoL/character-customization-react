import React from "react";

function Eyebrows({ setEyebrows, total }) {
  const imageFolderUrl = "images/eyebrows/";
  return (
    <div className="list-section">
      <h2>Eyebrows</h2>
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

export default Eyebrows;
