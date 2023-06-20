import React from "react";

function Avatar({ itemObject }) {
  return (
    <div className="avatar-wrapper">
      <div className="avatar">
        <img
          src={`/images/body/${itemObject._body}.png`}
          alt=""
          width="260"
          style={{
            zIndex: 0,
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        ></img>
        <img
          src={`/images/eyes/${itemObject._eyes}.png`}
          alt=""
          width="260"
          style={{
            zIndex: 1,
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        ></img>
        <img
          src={`/images/clothes/layer_1/${itemObject._clothing1}.png`}
          alt=""
          width="260"
          style={{
            zIndex: 2,
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        ></img>
        <img
          src={`/images/clothes/layer_2/${itemObject._clothing2}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "3",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        ></img>
        <img
          src={`/images/clothes/layer_3/${itemObject._clothing3}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "4",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        ></img>
        <img
          src={`/images/mouths/${itemObject._mouth}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "5",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        ></img>
        <img
          src={`/images/noses/1.png`}
          alt=""
          width="260"
          style={{
            zIndex: "5",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        ></img>
        <img
          src={`/images/eyebrows/${itemObject._eyebrows}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "5",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        ></img>
        <img
          src={`/images/accessories/glasses/${itemObject._glasses}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "6",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        ></img>
        <img
          src={`/images/hair/${itemObject._hair}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "7",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        ></img>

        <img
          src={`/images/accessories/hats/${itemObject._hat}.png`}
          alt=""
          width="260"
          style={{
            zIndex: "8",
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        ></img>
      </div>
      <div className="text-center">
        <button className="button">Randomize!</button>
      </div>
    </div>
  );
}

export default Avatar;
