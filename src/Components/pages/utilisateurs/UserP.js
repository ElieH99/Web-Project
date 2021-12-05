import React from 'react'
import "../../pages/utilisateurs/UserP.css"
import p from "../../../images/p.jpg"


function UserP() {
    return (
        <>  

        <div class="user-wrapper">
        <div class="left-sidebar">
                <ul>
                    <li><a href="/user"><i class="fas fa-user"/>My Profile</a></li>
                    <li><a href="/edit-profile"><i class="fas fa-edit"/>Edit Profile</a></li>
                    <li><a href="/myWorkout"><i class="fas fa-walking"/>My WorkoutPlan</a></li>
                    <li><a href="#"><i class="fas fa-apple-alt"/>My DietPlan</a></li>
                    <li><a href="/sign-up"><i class="fas fa-sign-out-alt"/>LogOut</a></li>
                </ul>

            </div>
            
            <div class="users-content">
            <div class="change-profile">
            <div class="tile-edit">Profile</div>
            <br/>
            
            <form action='#'>
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">Last Name</span>
                        <input type='text' value="Hanna" disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">First Name</span>
                        <input type='text' value="Elie" disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Email</span>
                        <input type='text' value="eliehanna99@gmail.com" disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Phone Number</span>
                        <input type='text' value="+961 78 354629" disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Date-of-birth</span>
                        <input type='text' value="18/11/1993" disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Weight</span>
                        <input type='text'value="72 Kg" disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Height</span>
                        <input type='text' value="180 cm" disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Gender</span>
                        <input type='text' value="Male" disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Id</span>
                        <input type='text' value="#1" disabled/>
                    </div>
                </div>
            </form>
        </div>
        </div>
        </div>
       
        </>
    
            
    );
}

export default UserP;
