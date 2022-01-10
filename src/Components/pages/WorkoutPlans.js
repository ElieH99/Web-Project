import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './WorkoutPlans.css';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/userCounter';
import { increment1 } from '../../redux/userCounter1';
import { increment2 } from '../../redux/userCounter2';
import { increment3 } from '../../redux/userCounter3';
import { increment4 } from '../../redux/userCounter4';
function WorkoutPlans() {
  

  function handleClick(e) {
    e.preventDefault();
    const audio=new Audio("./sounds/sound.mp3");
    audio.play();
  }

  let History= useHistory();
  const dispatch=useDispatch();
  function click(){
    dispatch(increment());
  }
  function click1(){
    dispatch(increment1());
  }
  function click2(){
    dispatch(increment2());
  }
  function click3(){
    dispatch(increment3());
  }
  function click4(){
    dispatch(increment4());
  }
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
      History.push('./LoseWeight');
      click();}}>
    <h2> Lose weight </h2>
    <p>Losing weight is easier said than done, and there isn’t a magic pill to take off pounds, you have to burn more calories than you take in.</p>
    </button>
    </div>

    <div class="column">
    <button onClick={() =>{
      History.push('./GainWeight');
      click1();}}>
    <h2>Gain weight</h2>
    <p>Just as exercise can help people lose weight, it can also help others gain weight in a healthy way.</p>
    </button>
    </div>
    <div class="column">
    <button onClick={() =>{
      History.push('./StayShape');
      click2();}}>
    <h2>Stay in shape</h2>
    <p>Middle ground between losing and gaining weight. This workout is perfect for people happy with their body and want to  be more active.</p>
    </button>
    </div>
    <div class="column">
    <button onClick={() =>{
      History.push('./BodyBuilding');
      click3();}}>
    <h2>Bodybuilding</h2>
    <p>Bodybuilding  is the process of enhancing the body's muscle and symmetry and the promotion of overall health and fitness</p>
    </button>
    </div>
    <div class="column">
    <button onClick={() =>{
      History.push('./Toning');
      click4();}}>
    <h2>Toning</h2>
    <p>Toning exercises are physical exercises that are used with the aim of developing a physique with an emphasis on muscle shape not size</p>
    </button>
    </div>
      </div>
      <br/><br/><br/>
      <button onClick={handleClick}>oui</button>
    </div>
    </>
  );
}

export default WorkoutPlans;