import React from "react";
import { renderbuttonItem } from "../utils/utils";

function Eyebrows({ setEyebrows, total }) {
  const itemArray = renderbuttonItem(total);
  const imageFolderUrl = "images/eyebrows/";
  return (
    <div className="list-section">
      <h2>Eyebrows</h2>
      <div className="list">
        {itemArray.map((item) => (
          <div
            key={item}
            className="clickable square"
            onClick={() => setEyebrows(item)}
          >
            <img
              src={`${imageFolderUrl}${item}.png`}
              alt=""
              height="60"
              className="img-center"
              style={{ top: "50%" }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eyebrows;
