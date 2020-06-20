import React from 'react';
import './App.css';
import { DataFetching } from './exams/component'
import {Navigation} from './components/Navigation'

function App() {
  return (
    <div>
      <Navigation /> 
        <div className="container">
          <DataFetching />
        </div>
    </div>
  );
}

export default App;
