import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/Body";
import Body from "./components/Body";
import Eyes from "./components/Eyes";
import Hair from "./components/Hair";
import Mouth from "./components/Mouth";
import Eyebrows from "./components/Eyebrows";
import Glasses from "./components/Glasses";
import Clothing1 from "./components/Clothing1";
import Clothing2 from "./components/Clothing2";
import Clothing3 from "./components/Clothing3";

function App() {
  const [body, setBody] = useState(1);
  const [eyes, setEyes] = useState(2);
  const [hair, setHair] = useState(3);
  const [mouth, setMouth] = useState(4);
  const [eyebrows, setEyebrows] = useState(5);
  const [glasses, setGlasses] = useState(6);
  const [shirt, setShirt] = useState(7);
  const [coat, setCoat] = useState(8);
  const [accessories, setAccessories] = useState(8);
  const [itemArray, setItemArray] = useState([
    body,
    eyes,
    hair,
    mouth,
    eyebrows,
    glasses,
    shirt,
    coat,
    accessories,
  ]);

  useEffect(() => {
    setItemArray([
      body,
      eyes,
      hair,
      mouth,
      eyebrows,
      glasses,
      shirt,
      coat,
      accessories,
    ]);
  }, [body, eyes, hair, mouth, eyebrows, glasses, shirt, coat, accessories]);

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <div>
          <div className="avatar-wrapper">
            <div className="avatar">
              <img
                src={"images/body/1.png"}
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
                src={"/images/eyes/16.png"}
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
                src={"/images/clothes/layer_1/4.png"}
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
                src={"/images/clothes/layer_2/1.png"}
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
                src={"/images/clothes/layer_3/8.png"}
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
                src={"/images/mouths/10.png"}
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
                src={"/images/noses/1.png"}
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
                src={"/images/eyebrows/7.png"}
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
                src={"/images/accessories/glasses/6.png"}
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
                src={"/images//hair/9.png"}
                alt=""
                width="260"
                style={{
                  zIndex: "7",
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
        </div>
        <div>
          <Body />
          <Eyes />
          <Hair />
          <Mouth />
          <Eyebrows />
          <Glasses />
          <Clothing1 />
          <Clothing2 />
          <Clothing3 />
        </div>
      </div>
    </div>
  );
}

export default App;
