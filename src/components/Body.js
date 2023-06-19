import React from "react";

function Body() {
  return (
    <div className="list-section">
      <h2>Body</h2>
      <div className="list">
        <div className="clickable square">
          <img
            src={"images/body/1.png"}
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

export default Body;
