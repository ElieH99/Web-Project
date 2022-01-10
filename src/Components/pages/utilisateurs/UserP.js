import React from 'react'
import { Link } from 'react-router-dom';
import "../../pages/utilisateurs/UserP.css"
import { selectUser } from '../../../redux/userSlicer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/userSlicer';
import { logout1 } from '../../../redux/userEdit';
import { selectEditUser } from '../../../redux/userEdit';
function UserP() {
    const user=useSelector(selectUser);
    const ed=useSelector(selectEditUser);
    const dispatch=useDispatch();
    
    const deconnecter=()=>{
        dispatch(logout());
    }
   const deconnecter1=()=>{
        dispatch(logout1());
    }
    const si=()=>{
        deconnecter();
        deconnecter1();
    }


    return (
        <>  

        <div class="user-wrapper">
        <div class="left-sidebar">
                <ul>
                    <li><Link to="/user"><i class="fas fa-user"/>My Profile</Link></li>
                     <li><Link to='/edit-profile' ><i class="fas fa-edit"/> Edit Profile</Link></li>
                    <li><Link to="/myWorkout"><i class="fas fa-walking"/>My WorkoutPlan</Link></li>
                    <li><Link to="/myDiet"><i class="fas fa-apple-alt"/>My DietPlan</Link></li>
                    <li><Link to="./sign-up" onClick={si}><i class="fas fa-sign-out-alt"/>LogOut</Link></li>
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
                        <input type='text' value={ed.lastName} disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">First Name</span>
                        <input type='text' value={ed.firstName} disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Email</span>
                        <input type='text' value={user.email} disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Phone Number</span>
                        <input type='text' value={ed.phoneNumber} disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Date-of-birth</span>
                        <input type='text' value={ed.dot} disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Weight</span>
                        <input type='text'value={ed.weight} disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Height</span>
                        <input type='text' value={ed.height} disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Gender</span>
                        <input type='text' value={ed.gender} disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Username</span>
                        <input type='text' value={user.name} disabled/>
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

