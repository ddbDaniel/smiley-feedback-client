import React, { useState } from "react";
import "./App.css";
import "./buttons.css";
import "./hover.css";
import "./eyes.css";
import "./mouth.css";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const ADD_RATING = gql`
  mutation addRating($rate: Int) {
    insert_ratings(objects: { surveyid: 1, value: $rate }) {
      affected_rows
    }
  }
`;

export const Rating: React.FC = () => {
  const [rated, setRated] = useState(false);

  const [
    addRating,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(ADD_RATING);

  const onClickButton = (value: number) => {
    // TODO: Speichern der Bewertung
    addRating({ variables: { rate: value } });
    setRated(true);
    setInterval(() => setRated(false), 5000);
  };

  if (mutationError) return <div>{mutationError.message}</div>;
  if (mutationLoading) return <div>loading...</div>;

  if (rated) {
    return (
      <div className="App">
        <header className="App-header">Danke für das Feedback!</header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="gtlt">
          <div className="buttons">
            <button className="button4" onClick={() => onClickButton(4)}>
              <div className="eyes">
                <div className="eye"></div>
                <div className="eye"></div>
              </div>
              <div className="mouth4"></div>
            </button>
            <button className="button3" onClick={() => onClickButton(3)}>
              <div className="eyes">
                <div className="eye"></div>
                <div className="eye"></div>
              </div>
              <div className="mouth3"></div>
            </button>
            <button className="button2" onClick={() => onClickButton(2)}>
              <div className="eyes">
                <div className="eye"></div>
                <div className="eye"></div>
              </div>
              <div className="mouth2"></div>
            </button>
            <button className="button1" onClick={() => onClickButton(1)}>
              <div className="eyes">
                <div className="angryEye1"></div>
                <div className="angryEye2"></div>
              </div>
              <div className="mouth1"></div>
            </button>
          </div>
        </div>
      </div>
    );
  }
};
