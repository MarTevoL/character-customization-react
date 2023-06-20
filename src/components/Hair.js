import React from "react";
import { renderbuttonItem } from "../utils/utils";

function Hair({ setHair, total }) {
  const itemArray = renderbuttonItem(total);
  const imageFolderUrl = "images/hair/";

  return (
    <div className="list-section">
      <h2>Hair</h2>
      <div className="list">
        {itemArray.map((item) => (
          <div
            key={item}
            className="clickable square"
            onClick={() => setHair(item)}
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

export default Hair;
