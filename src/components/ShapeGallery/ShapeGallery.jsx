import React, { useEffect, useState } from "react";

const ShapeGallery = () => {
  const [color, setColor] = useState("blue");

  const open = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <div>
      ShapeGallery
      <button onClick={() => open("yellow")}>open</button>
    </div>
  );
};

export default ShapeGallery;
