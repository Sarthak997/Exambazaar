import React, {useState, useEffect} from 'react'
import axios from 'axios'


export function DataFetching(props) {

    const api_key = 9116937670
    const [exams, setExams] = useState([])
    const [streams, setStreams] = useState([])
    useEffect(() => {
        axios.get(`https://www.exambazaar.com/api/coding-round/routes/exam-info/${api_key}`)
            .then(response => {
                if (props.name === "Exams"){
                setExams(response.data.data.exams)
            } else {
                setStreams(response.data.data.streams)
            }

            })
            .catch(error => {
                console.log(error)
            })
    }, [exams, streams, props.name])

        const handleClick = (event) => {
            event.preventDefault()
            <RandomQuestionFetch exams/>

        }

    return (
                <ul>
                {
                    exams.map(exam => <li>
                        <a href = {exam.name} onClick={handleClick}target = "_blank">  {exam.name}</a>
                        </li>)  
                }

                {
                streams.map(stream => <li>{stream.name}</li>)
                }
                
                </ul>
    );
}


