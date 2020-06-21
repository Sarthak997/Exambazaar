import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RandomQuestionFetch } from "./Questions";

export function DataFetching(props) {
  return (
    <Router>
      <div>
        <Route path="/exam/:examId" component={RandomQuestionFetch} />
        <ul>
          {props.data[props.name].map((exam) => (
            <li>
              <Link to={`/exam/${exam._id}`}>{exam.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Router>
  );
}
