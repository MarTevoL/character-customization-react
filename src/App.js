import React, { useState } from "react";
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
import Hat from "./components/Hat";
import Avatar from "./components/Avatar";
import Header from "./components/Header";
import Neckwear from "./components/Neckwear";
import Earrings from "./components/Earrings";

function App() {
  const [itemObject, setItemObject] = useState({
    _body: 1,
    _eyes: 1,
    _hair: 1,
    _mouth: 1,
    _eyebrows: 1,
    _glasses: 1,
    _clothing1: 1,
    _clothing2: 1,
    _clothing3: 1,
    _hat: 1,
    _neckwear: 1,
    _earrings: 1,
  });

  const total = {
    body: 17,
    eyes: 17,
    hair: 73,
    mouth: 24,
    eyebrows: 15,
    hat: 28,
    glasses: 17,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
    neckwear: 18,
    earrings: 32,
  };

  const handleSetBody = (value) => {
    setItemObject({ ...itemObject, _body: value });
  };

  const handleSetEyes = (value) => {
    setItemObject({ ...itemObject, _eyes: value });
  };

  const handleSetEyeBrows = (value) => {
    setItemObject({ ...itemObject, _eyebrows: value });
  };

  const handleSetHair = (value) => {
    setItemObject({ ...itemObject, _hair: value });
  };

  const handleSetMouth = (value) => {
    setItemObject({ ...itemObject, _mouth: value });
  };

  const handleSetGlasses = (value) => {
    setItemObject({ ...itemObject, _glasses: value });
  };

  const handleSetClothing1 = (value) => {
    setItemObject({ ...itemObject, _clothing1: value });
  };

  const handleSetClothing2 = (value) => {
    setItemObject({ ...itemObject, _clothing2: value });
  };

  const handleSetClothing3 = (value) => {
    setItemObject({ ...itemObject, _clothing3: value });
  };

  const handleSetHat = (value) => {
    setItemObject({ ...itemObject, _hat: value });
  };

  const handleSetNeckwear = (value) => {
    setItemObject({ ...itemObject, _neckwear: value });
  };

  const handleSetEarrings = (value) => {
    setItemObject({ ...itemObject, _earrings: value });
  };

  const handleRandomItem = (value) => {
    setItemObject({
      ...value,
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="avatar-group gap-30">
        <div>
          <Avatar
            itemObject={itemObject}
            totalObject={total}
            setItemObject={handleRandomItem}
          />
        </div>
        <div>
          <Body setBody={handleSetBody} total={total.body} />
          <Eyes setEyes={handleSetEyes} total={total.eyes} />
          <Hair setHair={handleSetHair} total={total.hair} />
          <Mouth setMouth={handleSetMouth} total={total.mouth} />
          <Eyebrows setEyebrows={handleSetEyeBrows} total={total.eyebrows} />
          <Glasses setGlasses={handleSetGlasses} total={total.glasses} />
          <Neckwear setNeckwear={handleSetNeckwear} total={total.neckwear} />
          <Earrings setEarrings={handleSetEarrings} total={total.earrings} />
          <Clothing1
            setClothing1={handleSetClothing1}
            total={total.clothing1}
          />
          <Clothing2
            setClothing2={handleSetClothing2}
            total={total.clothing2}
          />
          <Clothing3
            setClothing3={handleSetClothing3}
            total={total.clothing3}
          />
          <Hat setHat={handleSetHat} total={total.hat} />
        </div>
      </div>
    </div>
  );
}

export default App;
