import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [rated, setRated] = useState(false);

  const onclickbutton = (value: number) => {
    // TODO: Speichern der Bewertung
    setRated(true);
    setInterval(() => setRated(false), 5000);
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
        <header className="App-header">
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
  }
};

export default App;
