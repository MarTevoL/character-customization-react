import React from "react";
import Randomize from "./Randomize";
import AvatarLayer from "./AvatarLayer";

function Avatar({ itemObject, totalObject, setItemObject }) {
  return (
    <div className="avatar-wrapper">
      <div className="avatar">
        <AvatarLayer
          url={`images/body/${itemObject._body}.png`}
          zIndex={0}
          alt={"image body"}
        />
        <AvatarLayer
          url={`images/eyes/${itemObject._eyes}.png`}
          zIndex={1}
          alt={"image eyes"}
        />
        <AvatarLayer
          url={`images/clothes/layer_1/${itemObject._clothing1}.png`}
          zIndex={2}
          alt={"clothing layer 1"}
        />
        <AvatarLayer
          url={`images/clothes/layer_2/${itemObject._clothing2}.png`}
          zIndex={3}
          alt={"clothing layer 2"}
        />
        <AvatarLayer
          url={`images/clothes/layer_3/${itemObject._clothing3}.png`}
          zIndex={4}
          alt={"clothing layer 3"}
        />
        <AvatarLayer
          url={`images/mouths/${itemObject._mouth}.png`}
          zIndex={5}
          alt={"image mouth"}
        />
        <AvatarLayer
          url={`images/noses/1.png`}
          zIndex={5}
          alt={"image noses"}
        />
        <AvatarLayer
          url={`images/eyebrows/${itemObject._eyebrows}.png`}
          zIndex={5}
          alt={"image eyebrows"}
        />
        <AvatarLayer
          url={`images/accessories/glasses/${itemObject._glasses}.png`}
          zIndex={6}
          alt={"image glasses"}
        />
        <AvatarLayer
          url={`images/accessories/earrings/${itemObject._earrings}.png`}
          zIndex={9}
          alt={"image earrings"}
        />
        <AvatarLayer
          url={`images/accessories/neckwear/${itemObject._neckwear}.png`}
          zIndex={8}
          alt={"image neckwear"}
        />
        <AvatarLayer
          url={`images/hair/${itemObject._hair}.png`}
          zIndex={8}
          alt={"image hair"}
        />
        <AvatarLayer
          url={`images/accessories/hats/${itemObject._hat}.png`}
          zIndex={9}
          alt={"image hat"}
        />
      </div>
      <Randomize totalObject={totalObject} setItemObject={setItemObject} />
    </div>
  );
}

export default Avatar;
