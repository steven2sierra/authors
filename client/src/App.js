import React from 'react';
import './App.css';
import { Router } from '@reach/router';
// components that were meant to be considered views...
//import Form from './components/Form';
import Main from './views/Main';
import Update from './views/Update';
// import AuthorTable from './components/AuthorTable';
import Authors from './views/Authors';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/new"/>
        <Authors path="/"/>
        <Update path="/edit/:_id"/>
      </Router>
    </div>
  );
}

export default App;
