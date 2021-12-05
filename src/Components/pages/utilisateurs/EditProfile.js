import React, { useState, useEffect } from 'react';
import "../../pages/utilisateurs/UserP.css"
import "../../pages/utilisateurs/EditProfile.css"
function editProfile() {
    
    return (
        <>  
        <div class="user-wrapper">
            <div class="left-sidebar">
                <ul>
                    <li><a href="/user"><i class="fas fa-user"/>My Profile</a></li>
                    <li><a href="/edit-profile"><i class="fas fa-edit"/>Edit Profile</a></li>
                    <li><a href="/myWorkout"><i class="fas fa-walking"/>My WorkoutPlan</a></li>
                    <li><a href="#"><i class="fas fa-apple-alt"/>My DietPlan</a></li>
                    <li><a href=""><i class="fas fa-sign-out-alt"/>LogOut</a></li>
                </ul>

            </div>
            <div class="users-content">
            <div class="change-profile">
            <div class="tile-edit">Edit Profile</div>
            <form action='#'>
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">Last Name</span>
                        <input type='text' placeholder="Enter your last name" required/>
                    </div>
                    <div class="input-box" >
                        <span class="details">First Name</span>
                        <input type='text' placeholder="Enter your first name" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Email</span>
                        <input type='text' placeholder="Enter your email" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Phone Number</span>
                        <input type='text' placeholder="Enter your phone number" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Date-of-birth</span>
                        <input type='date' required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Weight</span>
                        <input type='text' placeholder="Enter your weight" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Height</span>
                        <input type='text' placeholder="Enter your height" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Password</span>
                        <input type='text' placeholder="Enter your password" required/>
                    </div>
                    <div class="input-box">
                        <span class="details">ConfirmPassword</span>
                        <input type='text' placeholder="Re-Enter your Password" required/>
                    </div>
                </div>
                <div class="gender-details">
                    <input type="radio" name="gender" id="dot-1" />
                    <input type="radio" name="gender" id="dot-2"/>
                    <input type="radio" name="gender" id="dot-3"/>
                    <span class="gender-title">Gender</span>
                    <div class="category">
                        <label for="dot-1">
                            <span class="dot one"></span>
                            <span class="gender">Male</span>
                        </label>
                        <label for="dot-2">
                            <span class="dot two"></span>
                            <span class="gender">Female</span>
                        </label>
                        <label for="dot-3">
                            <span class="dot three"></span>
                            <span class="gender">Prefer not to say</span>
                        </label>
                    </div>
                </div>
                {/* <div class="button_sub">
                    <input type="submit" value="Edit"  />
                </div> */}
                <div class="button_sub">
                    <input type="submit" value="Save Changes"  />
                </div>
            </form>
        </div>
        </div>
       </div>
        </>
    
            
    );
}

export default editProfile;
