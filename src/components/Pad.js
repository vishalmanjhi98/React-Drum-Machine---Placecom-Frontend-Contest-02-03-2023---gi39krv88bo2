import React, { useRef } from "react";
import { bank1 } from "./App";

function Pad({ handleClick, power, backgroundStyle, element, id }) {
  const audio = new Audio(bank1[element].source);

  window.addEventListener("keydown", (event) => {
    if (event.key === element || event.key === element.toLowerCase()) {
      handleClick(bank1[element]);
      audio.play();
    }
  });

  return (
    <button
      data-tag={id}
      type="button"
      className="drum-pad"
      onClick={() => {
        audio.play();
        handleClick(bank1[element]);
      }}
      id={bank1[element]}
      disabled={!power}
      style={{ background: `${backgroundStyle}` }}
    >
      {element}
      <audio id={element} src={bank1[element].source} className="clip"></audio>
    </button>
  );
}

export default Pad;