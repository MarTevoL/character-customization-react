import React from "react";

function Clothing3({ setClothing3, total }) {
  const imageFolderUrl = "images/clothes/layer_3/";
  return (
    <div className="list-section">
      <h2>Clothing layer 3</h2>
      <div className="list">
        <div className="clickable square">
          <img
            src={`${imageFolderUrl}5.png`}
            alt=""
            height="120"
            className="img-center"
            style={{ top: "-15px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Clothing3;
