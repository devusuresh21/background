import React, { useState } from "react";
import "./BackgroundChanger.css";

const BackgroundChanger = () => {
  const [bgColor, setBgColor] = useState("white");

  const colors = [
    "skyblue",
    "lightgreen",
    "coral",
    "lightyellow",
    "lavender",
    "pink",
    "violet",
    "purple",
  ];

  return (
    <div className="background-changer" style={{ backgroundColor: bgColor }}>
      <h1>CHANGE BACKGROUND COLOR</h1>
      <div className="button-container">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setBgColor(color)}
            style={{ backgroundColor: color }}
          >
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BackgroundChanger;