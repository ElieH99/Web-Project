import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './WorkoutPlans.css';
import { useHistory } from 'react-router';



function WorkoutPlans() {
  let History= useHistory();
  return (
    <>
    <div className='workback'>
       <div className='workout-title'>
      <h1>Your journey starts here!</h1>
      <p>We recommend checking with a professional<Link to='/trainers' className='trainer'> trainer</Link> before choosing a plan</p>
      </div>
      <div class="row">
    <div class='column'>
    <button onClick={() =>{
      History.push('./LoseWeight');}}>
    <h2> Lose weight </h2>
    <p>Losing weight is easier said than done, and there isn’t a magic pill to take off pounds, you have to burn more calories than you take in.</p>
    </button>
    </div>

    <div class="column">
    <button onClick={() =>{
      History.push('./GainWeight');}}>
    <h2>Gain weight</h2>
    <p>Just as exercise can help people lose weight, it can also help others gain weight in a healthy way.</p>
    </button>
    </div>
    <div class="column">
    <button onClick={() =>{
      History.push('./StayShape');}}>
    <h2>Stay in shape</h2>
    <p>Middle ground between losing and gaining weight. This workout is perfect for people happy with their body and want to  be more active.</p>
    </button>
    </div>
    <div class="column">
    <button onClick={() =>{
      History.push('./BodyBuilding');}}>
    <h2>Bodybuilding</h2>
    <p>Bodybuilding  is the process of enhancing the body's muscle and symmetry and the promotion of overall health and fitness</p>
    </button>
    </div>
    <div class="column">
    <button onClick={() =>{
      History.push('./Toning');}}>
    <h2>Toning</h2>
    <p>Toning exercises are physical exercises that are used with the aim of developing a physique with an emphasis on muscle shape not size</p>
    </button>
    </div>
      </div>
</div>

    </>
  );
}

export default WorkoutPlans;