import React from "react";
import { renderbuttonItem } from "../utils/utils";

function Body({ setBody, total }) {
  const imageFolderUrl = "images/body/";

  const itemArray = renderbuttonItem(total);

  return (
    <div className="list-section">
      <h2>Body</h2>
      <div className="list">
        {itemArray.map((item) => (
          <div
            key={item}
            className="clickable square"
            onClick={() => setBody(item)}
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

export default Body;
