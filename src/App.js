import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import  {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import About from './components/About';


function App() {
  return (
    <Router>
      <>
      <Route exact path = "/" component = {HomePage}/>
      <Switch>
      <Route path = "/about" component = {About}/>
        <Route path = "/skills" component = {Skills}/>
        <Route path = "/education" component = {Education}/>
        <Route path = "/experiences " component = {Experience}/>
        
      </Switch>
      </>
    </Router>
  );
}

export default App;
