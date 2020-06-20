import React from 'react';
import './App.css';
import { DataFetching } from './exams/component'
import {Navigation} from './components/Navigation'

function App() {
  return (
    <div className>
      <Navigation />   
          <DataFetching />
    </div>
  );
}

export default App;
