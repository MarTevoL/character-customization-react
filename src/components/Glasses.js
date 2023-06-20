import React from "react";
import { renderbuttonItem } from "../utils/utils";

function Glasses({ setGlasses, total }) {
  const itemArray = renderbuttonItem(total);
  const imageFolderUrl = "images/accessories/glasses/";
  return (
    <div className="list-section">
      <h2>Glasses</h2>
      <div className="list">
        {itemArray.map((item) => (
          <div
            key={item}
            className="clickable square"
            onClick={() => setGlasses(item)}
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

export default Glasses;
