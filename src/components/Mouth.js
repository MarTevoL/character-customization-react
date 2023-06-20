import React from "react";
import { renderbuttonItem } from "../utils/utils";

function Mouth({ setMouth, total }) {
  const itemArray = renderbuttonItem(total);
  const imageFolderUrl = "images/mouths/";
  return (
    <div className="list-section">
      <h2>Mouth</h2>
      <div className="list">
        {itemArray.map((item) => (
          <div
            key={item}
            className="clickable square"
            onClick={() => setMouth(item)}
          >
            <img
              src={`${imageFolderUrl}${item}.png`}
              alt=""
              height="120"
              className="img-center"
              style={{ top: "50%" }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mouth;
