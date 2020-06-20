import React, {useState, useEffect} from 'react'
import axios from 'axios'


export function DataFetching(props) {
    const api_key = 9116937670
    const [exams, setExams] = useState([])
    const [streams, setStreams] = useState([])
    useEffect(() => {
        axios.get(`https://www.exambazaar.com/api/coding-round/routes/exam-info/${api_key}`)
            .then(response => {
                setExams(response.data.data.exams)
                setStreams(response.data.data.streams)
                

            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <div class="dropdown">
                {
                    exams.map(exam => <li>
                        <a href = {exam.name} target = "_blank">  {exam.name}</a>
                        </li>)  
                }
               </div>
            <ul>{
                streams.map(stream => <li key={stream.id}>{stream.name}</li>)
               }
            </ul>
        </div>
    )
}