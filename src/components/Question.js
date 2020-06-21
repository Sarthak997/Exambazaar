import React, { useState, useEffect } from "react";
import axios from "axios";

export function RandomQuestion({ match }) {
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
    <div className="container" style={{ marginTop: "16px" }}>
      <div className="card">
        <div className="card-body">
          {data && data.context ? (
            <h4>
              <strong>{currentIndex + 1}.</strong> {data.context}
            </h4>
          ) : null}
          <div>
            {data &&
              data.questions &&
              data.questions.map((newQuest, key) => (
                <>
                  {data.context ? (
                    <h5>
                      <strong>Question:</strong> {newQuest.question}
                    </h5>
                  ) : (
                    <h4>
                      <strong>Question {currentIndex + 1}:</strong>{" "}
                      {newQuest.question}
                    </h4>
                  )}
                  {data.images &&
                    data.images.map((i) => (
                      <div key={i}>
                        <img src={i} alt="" />
                      </div>
                    ))}
                  {data.questions[key].options ? (
                    newQuest.mcqma ? (
                      data.questions[key].options.map((option) => (
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="exampleRadios"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            for="exampleRadios1"
                          >
                            {option.option}{" "}
                          </label>
                        </div>
                      ))
                    ) : (
                      data.questions[key].options.map((option) => (
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            for="exampleRadios1"
                          >
                            {option.option}{" "}
                          </label>
                        </div>
                      ))
                    )
                  ) : (
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Enter your answer here..."
                      ></textarea>
                    </div>
                  )}
                </>
              ))}
          </div>
          <nav aria-label="...">
            <ul className="pagination pagination-md justify-content-center">
              <button
                className="btn btn-primary my-2 my-lg-0 mr-4"
                onClick={() => setcurrentIndex(currentIndex - 1)}
                disabled={currentIndex <= 0}
              >
                Prev
              </button>
              <button
                className="btn btn-primary my-2 my-lg-0"
                onClick={() => setcurrentIndex(currentIndex + 1)}
              >
                Next
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
