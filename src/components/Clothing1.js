import React from "react";
import { renderbuttonItem } from "../utils/utils";

function Clothing1({ setClothing1, total }) {
  const itemArray = renderbuttonItem(total);
  const imageFolderUrl = "images/clothes/layer_1/";
  return (
    <div className="list-section">
      <h2>Clothing layer 1</h2>
      <div className="list">
        {itemArray.map((item) => (
          <div
            key={item}
            className="clickable square"
            onClick={() => setClothing1(item)}
          >
            <img
              src={`${imageFolderUrl}${item}.png`}
              alt=""
              height="60"
              className="img-center"
              style={{ top: "40%" }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clothing1;
