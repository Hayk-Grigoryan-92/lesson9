import React from "react";
import { useState } from "react";
import "./style.scss";

export const RandomBox = () => {
  const [boxArray, setBoxArray] = useState([]);

  function randomRGB() {
    return Math.floor(Math.random() * 256);
  }

  function randomColor() {
    return "rgb(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ")";
  }

  function addBox() {
    setBoxArray([...boxArray, { color: randomColor() }]);
  }

  function removeButton(index) {
    const newBoxArray = [...boxArray];
    newBoxArray.splice(index, 1);
    setBoxArray(newBoxArray);
  }

  return (
    <>
      <header className="header">
        <button onClick={addBox}>Create Box</button>
      </header>
      <div className="boxConteiner">
        {boxArray.map((item, index) => (
          <div className="box" style={{ backgroundColor: item.color }}>
            <button onClick={() => removeButton(index)}>Remove Box</button>
          </div>
        ))}
      </div>
    </>
  );
};
