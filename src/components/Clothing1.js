import React from "react";

function Clothing1({ setClothing1, total }) {
  const imageFolderUrl = "images/clothes/layer_1";
  return (
    <div className="list-section">
      <h2>Clothing layer 1</h2>
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

export default Clothing1;
