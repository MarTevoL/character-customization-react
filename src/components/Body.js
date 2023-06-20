import React from "react";

function Body({ setBody, total }) {
  const imageFolderUrl = "images/body/";
  const arrayItems = [];

  const renderbuttonItem = () => {
    for (let index = 0; index < total; index++) {
      arrayItems.push(`${index + 1}`);
      console.log(arrayItems);
    }
  };
  renderbuttonItem();

  return (
    <div className="list-section">
      <h2>Body</h2>
      <div className="list">
        {arrayItems.map((item) => (
          <div className="clickable square" onClick={() => setBody(item)}>
            <img
              src={`${imageFolderUrl}${item}.png`}
              alt=""
              height="60"
              className="img-center"
              style={{ top: "50%" }}
            ></img>
          </div>
        ))}
        {/* <div className="clickable square">
          <img
            src={`${imageFolderUrl}1.png`}
            alt=""
            height="60"
            className="img-center"
            style={{ top: "50%" }}
          ></img>
        </div> */}
      </div>
    </div>
  );
}

export default Body;
