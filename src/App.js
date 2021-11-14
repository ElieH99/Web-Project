import React from 'react';
import Navbar from './Components/NavBar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import SignUp from './Components/pages/Sign-Up';
import WorkoutPlans from './Components/pages/WorkoutPlans';
import DietPlans from './Components/pages/DietPlans';
import AboutUs  from './Components/pages/AboutUs';
import Trainers  from "./Components/pages/Trainers";
import AvailableDieticien  from './Components/pages/AvailableDieticien';


export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up'  component={SignUp} />
          <Route path='/workoutplans' component={WorkoutPlans} />
          <Route path='/dietplans' component={DietPlans} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/trainers' component={Trainers} />
          <Route path='/availabledieticien' component={AvailableDieticien} />
        </Switch>
      </Router>
    </>
  );
}


