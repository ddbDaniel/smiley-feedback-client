import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { number } from "prop-types";

const App: React.FC = () => {
  const [rated, setRated] = useState(0);
  const onclickbutton = (value: number) => {
    alert(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button className="button" onClick={() => setRated(rated + 1)}>
          Click me
        </button>
        <button className="button" onClick={() => onclickbutton(4)}>
          Sehr Gut
        </button>
        <button className="button" onClick={() => onclickbutton(3)}>
          Gut
        </button>
        <button className="button" onClick={() => onclickbutton(2)}>
          Schlecht
        </button>
        <button className="button" onClick={() => onclickbutton(1)}>
          Sehr schlecht
        </button>
      </header>
    </div>
  );
};

export default App;
