import React from "react";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import "./buttons.css";
import "./hover.css";
import "./eyes.css";
import "./mouth.css";
import "./smiley4.css";

const SURVEYS = gql`
  query AverageRating {
    ratings_aggregate {
      aggregate {
        count(columns: value)
        avg {
          value
        }
      }
    }
    vierer: ratings_aggregate(where: { value: { _eq: 4 } }) {
      aggregate {
        count(columns: value)
      }
    }
    dreier: ratings_aggregate(where: { value: { _eq: 3 } }) {
      aggregate {
        count(columns: value)
      }
    }
    zweier: ratings_aggregate(where: { value: { _eq: 2 } }) {
      aggregate {
        count(columns: value)
      }
    }
    einser: ratings_aggregate(where: { value: { _eq: 1 } }) {
      aggregate {
        count(columns: value)
      }
    }
  }
`;

export const Reporting: React.FC = () => {
  const { loading, error, data } = useQuery(SURVEYS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data.ratings_aggregate.aggregate);
  return (
    <div className="App">
      Auswertung der Bewertungen:
      <div className="auswertung">
        <div>Anzahl Bewertungen: {data.ratings_aggregate.aggregate.count} </div>
        <div className="vierer"></div>
        <span className="emoji" role="img" aria-label="veryhappyface">
          😀
        </span>{" "}
        {data.vierer.aggregate.count}
        <div className="dreier"></div>
        <span className="emoji" role="img" aria-label="veryhappyface">
          🙂
        </span>{" "}
        {data.dreier.aggregate.count}
        <div className="zweier"></div>
        <span className="emoji" role="img" aria-label="veryhappyface">
          🙁
        </span>{" "}
        {data.zweier.aggregate.count}
        <div className="einser"></div>
        <span className="emoji" role="img" aria-label="veryhappyface">
          😡
        </span>{" "}
        {data.einser.aggregate.count}
        <div className="Gesamtauswertung">
          Gesamtauswertung:{" "}
          {data.ratings_aggregate.aggregate.avg.value.toFixed(2)}/4
        </div>
      </div>
    </div>
  );
};
