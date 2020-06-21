import React, { useEffect, useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import Axios from "axios";
import { List } from "./components/List";
import { BrowserRouter, Route } from "react-router-dom";
import { RandomQuestion } from "./components/Question";

const api_key = 9116937670;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Axios.get(
      `https://www.exambazaar.com/api/coding-round/routes/exam-info/${api_key}`
    )
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/exam/:examId" component={RandomQuestion} />
      <Route path="/" exact>
        {data ? (
          <div>
            <List title="Exams" data={data.exams} showButton />
            <List title="Streams" data={data.streams} />
          </div>
        ) : (
          <div>Loading ...</div>
        )}
      </Route>
    </BrowserRouter>
  );
}

export default App;
