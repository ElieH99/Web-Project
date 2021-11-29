import React from 'react'
import "../../pages/utilisateurs/UserP.css"

function UserP() {
    return (
        <>  

        <div class="user-wrapper">
        <div class="left-sidebar">
                <ul>
                    <li><a href="/user"><i class="fas fa-user"/>My Profile</a></li>
                    <li><a href="/edit-profile"><i class="fas fa-edit"/>Edit Profile</a></li>
                    <li><a href="#"><i class="fas fa-walking"/>My WorkoutPlan</a></li>
                    <li><a href="#"><i class="fas fa-apple-alt"/>My DietPlan</a></li>
                    <li><a href=""><i class="fas fa-sign-out-alt"/>LogOut</a></li>
                </ul>

            </div>
            
          <div class="user-content">
            <h1>User 1</h1>
            <p>First Name:<input placeholder='FirstName'></input> <br/>
               Last Name:<input placeholder='LastName'></input> <br/>
               Date of birth:<input type='date'></input><br/>
               Sex: <input type='radio' id="gender"/>
              <label for="Male"> Male </label>   <spacer type="horizontal" width="100" height="100"> | </spacer>
              <input type="radio" id="Female"/> 
              <label for="Female"> Female </label><br/>
              Weight:<input placeholder='Weight in kg'></input> <br/>
              Height:<input placeholder='Height in cm'></input> <br/>
              <h3>Program to follow:</h3>
              <select class="select_workout" id="workouts">
              <option value="Lose Weight">Lose Weight</option>
              <option value="Gain Weight">Gain Weight</option>
              <option value="Stay in Shape">Stay in Shape</option>
              <option value="BodyBuilding">BodyBuilding</option>
              <option value='toning'>Toning</option>
            </select>
            <button>Confirm</button>

            <h3>Diet to follow:</h3>
              <select class="select_workout" id="workouts">
              <option value="Low Calorie">Low Calorie</option>
              <option value="Low_Carbohydarte">Low-Carbohydarte</option>
              <option value="Low Fat">Low Fat</option>
              <option value="Balanced">Balanced</option>
              <option value='Bulking'>Bulking</option>
            </select>
            <button>Confirm</button>
            
            </p>
            
          </div>
        </div>
       
        </>
    
            
    );
}

export default UserP;
