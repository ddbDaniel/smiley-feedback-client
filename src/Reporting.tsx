import React from "react";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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
  }
`;

export const Reporting: React.FC = () => {
  const { loading, error, data } = useQuery(SURVEYS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data.ratings_aggregate.aggregate);
  return (
    <div className="App">
      <div className="auswertung">
        Auswertung der Bewertungen
        <div>Anzahl Bewertungen: {data.ratings_aggregate.aggregate.count} </div>
        <div>
          Gesamtauswertung:{" "}
          {data.ratings_aggregate.aggregate.avg.value.toFixed(2)} von 4
        </div>
      </div>
    </div>
  );
};
