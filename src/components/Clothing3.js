import React from "react";
import { renderbuttonItem } from "../utils/utils";

function Clothing3({ setClothing3, total }) {
  const itemArray = renderbuttonItem(total);
  const imageFolderUrl = "images/clothes/layer_3/";
  return (
    <div className="list-section">
      <h2>Clothing layer 3</h2>
      <div className="list">
        {itemArray.map((item) => (
          <div
            key={item}
            className="clickable square"
            onClick={() => setClothing3(item)}
          >
            <img
              src={`${imageFolderUrl}${item}.png`}
              alt=""
              height="120"
              className="img-center"
              style={{ top: "-15px" }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clothing3;
