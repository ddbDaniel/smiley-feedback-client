import React from "react";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import "./Administration.css";

const SURVEYLIST = gql`
  query SURVEYLIST {
    surveys {
      id
      title
      date
      comment
    }
  }
`;

export const Administration: React.FC = () => {
  const { loading, error, data } = useQuery(SURVEYLIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  // console.log(data.surveys.map(Administration));

  return (
    <div className="App">
      Administration der Bewertungen
      <div>
        {data.surveys.map((survey: any) => {
          return (
            <div className="surveys">
              <table className="Table">
                <tr>
                  <th>ID</th>
                  <th>Titel</th>
                  <th>Datum</th>
                </tr>
                <tr className="Tabelle">
                  <td>{survey.id}</td>
                  <td>{survey.title}</td>
                  <td>{survey.date}</td>
                </tr>
              </table>
            </div>
          );
        })}

        <form className="Formular">
          Titel:
          <input className="titel" type="text" name="title"></input>
          <br></br>
          Datum:
          <input className="datum" type="date" name="date"></input>
          <br></br>
          Kommentar:
          <textarea className="kommentar"></textarea>
          <input className="submit" type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};
