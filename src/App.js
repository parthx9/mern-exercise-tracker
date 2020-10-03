import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ExerciseList from './components/ExerciseList';
import EditExercise from "./components/EditExercise";
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

class App extends Component {
  render(){
  return (
      <Router>
        <Navbar />
        <div className='container mt-5'>
          <Route path="/" exact component={ExerciseList} />
          <Route path="/edit/:id"  component={EditExercise} />
          <Route path="/create"  component={CreateExercise} />
          <Route path="/user" exact component={CreateUser} /> 
        </div>
      </Router>
    );
  }
}

export default App;
