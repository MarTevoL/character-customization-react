import React from "react";

function Eyes({ setEyes, total }) {
  const imageFolderUrl = "images/eyes/";
  return (
    <div className="list-section">
      <h2>Eyes</h2>
      <div className="list">
        <div className="clickable square">
          <img
            src={`${imageFolderUrl}1.png`}
            alt=""
            height="150"
            className="img-center"
            style={{ top: "35px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
