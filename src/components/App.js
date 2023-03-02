import React, { useState } from "react";
import "../styles/App.css";
import Pads from "./Pads";

export const bank1 = {
  Q: {
    name: "Heater 1",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  W: {
    name: "Heater 2",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  E: {
    name: "Heater 4",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  A: {
    name: "Heater 3",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  S: {
    name: "Clap",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  D: {
    name: "Open Hi-Hat",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  Z: {
    name: "Kick n Hat",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  X: {
    name: "Kick",
    source: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  C: {
    name: "Closed Hi-Hat",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
};

function ControlScreen({ volume, volumeHandler, on, onHandler }) {
  return (
    <div id="control-screen">
      <label id="label-power">
        <input type="checkbox" id="power" onClick={() => onHandler()} />
        <span className="checkmark">{on ? "ON" : "OFF"}</span>
      </label>
      <label id="label-volume">
        <input
          type="range"
          id="volume"
          value={volume}
          onChange={(e) => volumeHandler(e.target.value)}
        />
        <span id="volume-display">Volume : {volume} </span>
      </label>
    </div>
  );
}

function App() {
  const [volume, setVolume] = useState(0);
  const [on, setOn] = useState(false);

  const volumeHandler = (val) => {
    setVolume(val);
  };

  const onHandler = () => {
    setOn(!on);
  };

  return (
    <div id="drum-machine">
      <Pads power={on} />
      <br />
      <br />
      <br />
      <ControlScreen
        volume={volume}
        volumeHandler={volumeHandler}
        on={on}
        onHandler={onHandler}
      />
    </div>
  );
}

export default App;