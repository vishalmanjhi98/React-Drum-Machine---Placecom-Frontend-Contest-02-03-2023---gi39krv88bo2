import React, { useEffect, useState } from "react";
import Pad from "./Pad";
import { bank1 } from "./App";

function Pads({ power }) {
  const keypadCode = Object.keys(bank1);
  const [audioName, setAudioName] = useState(null);

  const playSound = (e) => {
    setAudioName(e.name);
  };

  return (
    <div id="div-pads">
      {keypadCode.map((pad, idx) => {
        // console.log(pad + idx);
        return (
          <Pad
            id={pad + idx}
            key={pad + idx}
            handleClick={playSound}
            element={pad}
            power={power}
          />
        );
      })}
      <div id="display"> {audioName} </div>
    </div>
  );
}

export default Pads;