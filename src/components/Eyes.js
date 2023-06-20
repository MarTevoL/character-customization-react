import React from "react";
import { renderbuttonItem } from "../utils/utils";

function Eyes({ setEyes, total }) {
  const itemArray = renderbuttonItem(total);
  const imageFolderUrl = "images/eyes/";

  return (
    <div className="list-section">
      <h2>Eyes</h2>
      <div className="list">
        {itemArray.map((item) => (
          <div
            key={item}
            className="clickable square"
            onClick={() => setEyes(item)}
          >
            <img
              src={`${imageFolderUrl}${item}.png`}
              alt=""
              height="150"
              className="img-center"
              style={{ top: "35px" }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eyes;
