import React, { useState } from "react";
import "./App.css";
import "./buttons.css";
import "./hover.css";
import "./eyes.css";
import "./mouth.css";

export const Rating: React.FC = () => {
  const [rated, setRated] = useState(false);

  const onclickbutton = (value: number) => {
    // TODO: Speichern der Bewertung
    setRated(true);
    setInterval(() => setRated(false), 3000);
  };

  if (rated) {
    return (
      <div className="App">
        <header className="App-header">Danke für das Feedback! </header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="buttons">
          {/* <div className="smileyBox"> */}
          <button className="button4" onClick={() => onclickbutton(4)}>
            <div className="eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
            <div className="mouth4"></div>
          </button>
          <button className="button3" onClick={() => onclickbutton(3)}>
            <div className="eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
            <div className="mouth3"></div>
          </button>
          <button className="button2" onClick={() => onclickbutton(2)}>
            <div className="eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
            <div className="mouth2"></div>
          </button>
          <button className="button1" onClick={() => onclickbutton(1)}>
            <div className="eyes">
              <div className="angryEye1"></div>
              <div className="angryEye2"></div>
            </div>
            <div className="mouth1"></div>
          </button>
          {/* </div> */}
        </div>
      </div>
    );
  }
};
