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
import Hat from "./components/Hat";
import Avatar from "./components/Avatar";
import Header from "./components/Header";

function App() {
  const [body, setBody] = useState(1);
  const [eyes, setEyes] = useState(2);
  const [hair, setHair] = useState(3);
  const [mouth, setMouth] = useState(4);
  const [eyebrows, setEyebrows] = useState(5);
  const [glasses, setGlasses] = useState(6);
  const [clothing1, setClothing1] = useState(1);
  const [clothing2, setClothing2] = useState(1);
  const [clothing3, setClothing3] = useState(1);
  const [hat, setHat] = useState(1);
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
  };

  useEffect(() => {
    setItemObject({
      _body: body,
      _eyes: eyes,
      _hair: hair,
      _mouth: mouth,
      _eyebrows: eyebrows,
      _glasses: glasses,
      _clothing1: clothing1,
      _clothing2: clothing2,
      _clothing3: clothing3,
      _hat: hat,
    });
  }, [
    body,
    eyes,
    hair,
    mouth,
    eyebrows,
    glasses,
    clothing1,
    clothing2,
    clothing3,
    hat,
  ]);

  const handleSetBody = (value) => {
    setBody(value);
  };

  const handleSetEyes = (value) => {
    setEyes(value);
  };

  const handleSetEyeBrows = (value) => {
    setEyebrows(value);
  };

  const handleSetHair = (value) => {
    setHair(value);
  };

  const handleSetMouth = (value) => {
    setMouth(value);
  };

  const handleSetGlasses = (value) => {
    setGlasses(value);
  };

  const handleSetClothing1 = (value) => {
    setClothing1(value);
  };

  const handleSetClothing2 = (value) => {
    setClothing2(value);
  };

  const handleSetClothing3 = (value) => {
    setClothing3(value);
  };

  const handleSetHat = (value) => {
    setHat(value);
  };

  return (
    <div className="App">
      <Header />
      <div className="avatar-group gap-30">
        <div>
          <Avatar itemObject={itemObject} />
        </div>
        <div>
          <Body setBody={handleSetBody} total={total.body} />
          <Eyes setEyes={handleSetEyes} total={total.eyes} />
          <Hair setHair={handleSetHair} total={total.hair} />
          <Mouth setMouth={handleSetMouth} total={total.mouth} />
          <Eyebrows setEyebrows={handleSetEyeBrows} total={total.eyebrows} />
          <Glasses setGlasses={handleSetGlasses} total={total.glasses} />
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
