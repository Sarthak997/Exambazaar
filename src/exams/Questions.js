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
  }, [examId]);

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
              {data.images &&
                data.images.map((i) => (
                  <div key={i}>
                    <img src={i} alt="" />
                  </div>
                ))}
              {data.questions[key].options ? (
                newQuest.mcqma ? (
                  data.questions[key].options.map((option) => (
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="exampleRadios"
                        value="option1"
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        {option.option}{" "}
                      </label>
                    </div>
                  ))
                ) : (
                  data.questions[key].options.map((option) => (
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        {option.option}{" "}
                      </label>
                    </div>
                  ))
                )
              ) : (
                <div>
                  <textarea placeholder="Enter your answer here..." />
                </div>
              )}
            </li>
          ))}
      </div>
      <nav aria-label="...">
        <ul className="pagination pagination-md justify-content-center">
          <li
            className="btn btn-primary my-2 my-lg-0 mr-4"
            onClick={() => setcurrentIndex(currentIndex - 1)}
          >
            Prev
          </li>
          <li
            className="btn btn-primary my-2 my-lg-0"
            onClick={() => setcurrentIndex(currentIndex + 1)}
          >
            Next
          </li>
        </ul>
      </nav>
    </div>
  );
}
