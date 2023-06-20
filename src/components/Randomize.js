import React from "react";
import { randomNumber } from "../utils/utils";

function Randomize({ totalObject, setItemObject }) {
  const setRandomChar = () => {
    let randomBody = randomNumber(1, 9);

    const randomChar = {
      _body: randomNumber(1, totalObject.body),
      _eyes: randomNumber(1, totalObject.eyes),
      _hair: randomNumber(1, totalObject.hair),
      _mouth: randomNumber(1, totalObject.mouth),
      _eyebrows: randomNumber(1, totalObject.eyebrows),
      _glasses: randomNumber(1, totalObject.glasses),
      _clothing1: randomNumber(1, totalObject.clothing1),
      _clothing2: randomNumber(1, totalObject.clothing2),
      _clothing3: randomNumber(1, totalObject.clothing3),
      _hat: randomNumber(1, totalObject.hat),
    };
    console.log(randomChar);
    setItemObject(randomChar);
  };
  return (
    <div className="text-center">
      <button className="button" onClick={() => setRandomChar()}>
        Randomize!
      </button>
    </div>
  );
}

export default Randomize;
