import React from "react";
import { renderbuttonItem } from "../utils/utils";

function Neckwear({ setNeckwear, total }) {
  const itemArray = renderbuttonItem(total);
  const imageFolderUrl = "images/accessories/neckwear/";

  return (
    <div className="list-section">
      <h2>Neckwear</h2>
      <div className="list">
        {itemArray.map((item) => (
          <div
            key={item}
            className="clickable square"
            onClick={() => setNeckwear(item)}
          >
            <img
              src={`${imageFolderUrl}${item}.png`}
              alt=""
              height="60"
              className="img-center"
              style={{ top: "20%" }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Neckwear;
