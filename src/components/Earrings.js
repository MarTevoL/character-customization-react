import React from "react";
import { renderbuttonItem } from "../utils/utils";

function Earrings({ setEarrings, total }) {
  const itemArray = renderbuttonItem(total);
  const imageFolderUrl = "images/accessories/earrings/";

  return (
    <div className="list-section">
      <h2>Earrings</h2>
      <div className="list">
        {itemArray.map((item) => (
          <div
            key={item}
            className="clickable square"
            onClick={() => setEarrings(item)}
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

export default Earrings;
