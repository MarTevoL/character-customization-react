import React from "react";

function Clothing2({ setClothing2, total }) {
  const imageFolderUrl = "images/clothes/layer_2/";
  return (
    <div className="list-section">
      <h2>Clothing layer 2</h2>
      <div className="list">
        <div className="clickable square">
          <img
            src={`${imageFolderUrl}2.png`}
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

export default Clothing2;
