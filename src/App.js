import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import { RandomQuestionFetch } from './exams/Questions'
import {Navigation} from './components/Navigation'

function App() {
  return (
    <div>
      <Navigation />    
    </div>
    
  );
}

export default App;
