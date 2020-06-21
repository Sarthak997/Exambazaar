import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import axios from 'axios'
import {RandomQuestionFetch} from './Questions'

export function DataFetching(props) {

    const api_key = 9116937670
    const [exams, setExams] = useState([])
    const [streams, setStreams] = useState([])
    const [examId, setExamId] = useState()


        const handleClick = (event, Id) => {
            event.preventDefault()
            setExamId(Id)
            

        }

    return (   
        <Router>
        <div>
         <Route path='/exam/:examId' component={RandomQuestionFetch} />

                <ul>
                {
                    props.data[props.name].map(exam => <li>
                        <Link to={`/exam/${exam._id}`}>{exam.name}</Link>
                        </li>)  
                }
                
                </ul>
                </div>
         </Router>
    );
}


