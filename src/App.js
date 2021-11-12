import React from 'react';
import Navbar from './Components/NavBar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import SignUp from './Components/pages/Sign-Up';
import WorkoutPlans from './Components/pages/WorkoutPlans';
import DietPlans from './Components/pages/DietPlans';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/workoutplans' component={WorkoutPlans} />
          <Route path='/dietplans' component={DietPlans} />
        </Switch>
      </Router>
    </>
  );
}

export default App;