import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './DietPlans.css';



function DietPlans() {
  return (
    <>
    <div className='dietback'>
       <div className='diet-title'>
      <h1>A proper diet is as important as a proper workout!</h1>
      <p>We recommend consulting a <Link to='/availabledieticien' className='dieticien'> dietecien</Link> before choosing a diet</p>
      </div>
      <div class="drow">
    <div class='dcolumn'>
    <button>
    <h2> Low calorie </h2>
    <p>A low calorie diet gives a target intake of calories each day.Provides a steady way to achieve weight loss</p>
    </button>
    </div>

    <div class="dcolumn">
    <button>
    <h2>Low-carbohydrate</h2>
    <p>Low-carbohydrate diets involve restricting how many carbohydrates you eat. </p>
    </button>
    </div>
    <div class="dcolumn">
    <button className="buttonwork">
    <h2>Low fat</h2>
    <p>A low-fat diet is one that restricts fat. Intended to reduce the occurrence of conditions such as heart disease and obesity</p>
    </button>
    </div>
    <div class="dcolumn">
    <button>
    <h2>Balanced </h2>
    <p>A balanced diet consists of the proper quantities an proportions of foods to maintain health or growth </p>
    </button>
    </div>
    <div class="dcolumn">
    <button>
    <h2>Weight Gain</h2>
    <p>Increases your daily calorie intake to put on more weight by eating foods that are high in calories. </p>
    </button>
    </div>
      </div>
</div>

    </>
  );
}

export default DietPlans;