import React from "react";

function Glasses() {
  return (
    <div className="list-section">
      <h2>Glasses</h2>
      <div className="list">
        <div className="clickable square">
          <img
            src={"images/accessories/glasses/1.png"}
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