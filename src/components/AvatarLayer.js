import React from "react";

function AvatarLayer({ url, zIndex, alt }) {
  return (
    <img
      src={url}
      alt={alt}
      width="260"
      style={{
        zIndex: zIndex,
        position: "absolute",
        left: "0px",
        top: "0px",
      }}
    ></img>
  );
}

export default AvatarLayer;
