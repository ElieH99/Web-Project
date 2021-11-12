import React from 'react';
import '../../App.css';
import './WorkoutPlans.css'



function WorkoutPlans() {
  return (
    <>
     <div className='workout-container'>
      <h1>What is your goal</h1>
      <p>We recommend checking with a professional trainer before choosing a plan</p>
      <div class="row">
    <div class='column'>
    <h2>Lose weight</h2>
    <p>description of workout</p>
    </div>
    <div class="column">
    <h2>Gain weight</h2>
    <p>description of workout</p>
    </div>
    <div class="column">
    <h2>Stay in shape</h2>
    <p>description of workout</p>
    </div>
    <div class="column">
    <h2>Build muscles</h2>
    <p>description of workout</p>
    </div>
    <div class="column">
    <h2>Toning</h2>
    <p>description of workout</p>
    </div>
    </div>

      </div>
    </>
  );
}

export default WorkoutPlans;