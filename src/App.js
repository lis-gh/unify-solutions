import React from 'react';
import Header from './Header';
import Todo from './Todo';
//import {BrowserRouter, Route} from 'react-router-dom';
import Weather from './Weather';
function App() {
  return (
    <div className="container">
      
      
      <Todo />
      <Weather />
      
    </div>
  );
}

export default App;