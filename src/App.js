import React from 'react';
import './App.css';
import { RandomQuestionFetch } from './exams/component'
import {Navigation} from './components/Navigation'

function App() {
  return (
    <div>
      <Navigation />   
      <RandomQuestionFetch /> 
    </div>
    
  );
}

export default App;
