import React, { useState, useEffect } from "react";
import axios from "axios";

export function RandomQuestionFetch({ match }) {
  console.log(match);
  const examId = match.params.examId;
  console.log(examId);
  // const [newQuestion, setNewQuestion] = useState([])
  // const [answers, setAnswers] = useState([])
  // const [context, setContext] = useState([])
  const [dataArray, setDataArray] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    setcurrentIndex(0);
    axios
      .post(
        "https://www.exambazaar.com/api/coding-round/routes/random-question",
        {
          api_key: "9116937670",
          api_secret: "5ee9d40b681923387991481c",
          examId: `${examId}`,
        }
      )
      .then((response) => {
        var newData = response.data.data.question;
        setDataArray([newData]);
        // setContext(data.context)
        // setNewQuestion([...newQuestion, ...data.questions])
        // setAnswers(data.questions[0].options)
        // console.log(data)
      })

      .catch((error) => {
        console.log(error);
      });
  }, [match, examId]);

  useEffect(() => {
    if (currentIndex >= dataArray.length) {
      axios
        .post(
          "https://www.exambazaar.com/api/coding-round/routes/random-question",
          {
            api_key: "9116937670",
            api_secret: "5ee9d40b681923387991481c",
            examId: `${examId}`,
          }
        )
        .then((response) => {
          var newData = response.data.data.question;
          setDataArray([...dataArray, newData]);
          // setContext(data.context)
          // setNewQuestion([...newQuestion, ...data.questions])
          // setAnswers(data.questions[0].options)
          // console.log(data)
        })

        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentIndex, dataArray, examId]);
  // console.log(newQuestion)
  const data = dataArray ? dataArray[currentIndex] : null;
  return (
    <div>
      {data && data.context ? data.context : null}
      <div>
        {data &&
          data.questions &&
          data.questions.map((newQuest, key) => (
            <li>
              {newQuest.question}
              {data &&
                data.questions[key].options.map((option) => (
                  <div>{option.option}</div>
                ))}
            </li>
          ))}
      </div>
      <nav aria-label="...">
        <ul class="pagination pagination-md justify-content-center">
          <li
            class="page-item"
            onClick={() => setcurrentIndex(currentIndex - 1)}
          >
            Prev
          </li>
          <li
            class="page-item"
            onClick={() => setcurrentIndex(currentIndex + 1)}
          >
            Next
          </li>
        </ul>
      </nav>
    </div>
  );
}
