import React, {useState, useEffect} from 'react'
import {Cards} from 'react-bootstrap'
import axios from 'axios'

export function DataFetching() {
    const api_key = 9116937670
    const [exams, setExams] = useState([])
    const [streams, setStreams] = useState([])
    useEffect(() => {
        axios.get(`https://www.exambazaar.com/api/coding-round/routes/exam-info/${api_key}`)
            .then(res => {
                setExams(res.data.data.exams)
                setStreams(res.data.data.streams)
                

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h2>Exams</h2>
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="..." alt="Card image cap"></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            <ul>
                {
                    exams.map(exam => <li key={exam.id}>
                        <a href = {exam.name} target = "_blank">  {exam.name}</a>
                        </li>)
               
               }
            </ul>
            <h2>Streams</h2>
            <ul>{
                streams.map(stream => <li key={stream.id}>{stream.name}</li>)
               }
            </ul>
        </div>
    )
}