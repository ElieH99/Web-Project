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
import LowCalorie from './Components/pages/LowCalorie';
import LowCarbo from './Components/pages/LowCarbo';
import LowFat from './Components/pages/LowFat';
import Gaindiet from './Components/pages/GainDiet';
import Balanced from './Components/pages/Balanced';

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
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/trainers' component={Trainers} />
          <Route path='/availabledieticien' component={AvailableDieticien} />
          <Route path='/lowcalorie' component={LowCalorie}/>
          <Route path='/lowcarbo' component={LowCarbo}/>
          <Route path='/gaindiet' component={Gaindiet}/>
          <Route path='/balanced' component={Balanced}/>
          <Route path='/lowfat' component={LowFat}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;