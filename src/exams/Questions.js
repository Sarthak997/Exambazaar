import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {DataFetching} from './component'





export function RandomQuestionFetch(props) {

    const examId = props.examId
    const [newQuestion, setNewQuestion] = useState([])
    const [answers, setAnswers] = useState([])
    const [context, setContext] = useState([])
    const [contextIsThere, setContextIsThere] = useState(false)
    useEffect(()=>{
        axios.post("https://www.exambazaar.com/api/coding-round/routes/random-question", {
            api_key: "9116937670",
            api_secret: "5ee9d40b681923387991481c",
            examId : `${examId}`
        })
            .then(response => {
                let data = response.data.data.question
                if (data.context !== "") {
                    setContextIsThere(true)
                    setContext(data.context)
                    setNewQuestion([data.questions[0]])
                    setAnswers(data.questions[0].options)
                    console.log(data)
                    
                }
                else{
                    data = data.questions[0]
                    console.log(data)
                    setNewQuestion([data])
                    setAnswers(data.options)
                }
            })

            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <ul>
            {context}
            
            {newQuestion.map(newQuest => <li>{newQuest.question}</li>)}
            {answers.map(answer => <li>{answer.option}</li>)}
        </ul>
    );

    
}