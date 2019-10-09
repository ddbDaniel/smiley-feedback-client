import React from "react";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const SURVEYS = gql`
  query reporting {
    surveys {
      title
      ratings {
        id
        value
      }
    }
  }
`;

export const Reporting: React.FC = () => {
  const { loading, error, data } = useQuery(SURVEYS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      Auswertung der Bewertungen
      <div>{data.surveys[0].title}</div>
      {data.surveys[0].ratings.map((rate: any) => (
        <div key={rate.id}>{rate.value}</div>
      ))}
    </div>
  );
};
