import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../pages/utilisateurs/UserP.css"
import "../../pages/utilisateurs/EditProfile.css"
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/userSlicer';
import { logout1 } from '../../../redux/userEdit';
import { save } from '../../../redux/userEdit';
import { selectUser } from '../../../redux/userSlicer';
import { useSelector } from 'react-redux';
function EditProfile() {
    const dispatch=useDispatch();
    const user=useSelector(selectUser);
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [weight,setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [dot,setDot] = useState('');
    const [gender,setGender] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(save({
            firstName:firstName,
            lastName:lastName,
            weight:weight,
            height:height,
            phoneNumber:phoneNumber,
            dot:dot,
            gender:gender,
            loggedIn:true,
            
        }));
       
    
    }
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
            <div class="tile-edit">Edit Profile</div>
            <form onSubmit={handleSubmit}>
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">Last Name</span>
                        <input type='text' placeholder="Enter your last name" onChange={(e)=>setLastName(e.target.value)} required/>
                    </div>
                    <div class="input-box" >
                        <span class="details">First Name</span>
                        <input type='text' placeholder="Enter your first name" onChange={(e)=>setFirstName(e.target.value)} required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Email Address</span>
                        <input type='text' value={user.email} disabled required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Phone Number</span>
                        <input type='text' placeholder="Enter your phone number" onChange={(e)=>setPhoneNumber(e.target.value)} required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Date-of-birth</span>
                        <input type='date' onChange={(e)=>setDot(e.target.value)} required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Weight</span>
                        <input type='text' placeholder="Enter your weight" onChange={(e)=>setWeight(e.target.value)} required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Height</span>
                        <input type='text' placeholder="Enter your height" onChange={(e)=>setHeight(e.target.value)} required/>
                    </div>
                    <div class="input-box">
                        <span class="details">Password</span>
                        <input type='password' value={user.password} required disabled></input>
                        <i class="bi bi-eye-slash"  id="togglePassword"></i>
                    </div>
                    <div class="input-box">
                        <span class="details">Username</span>
                        <input type='text' value={user.name} required disabled/>
                        
                    </div>
                </div>
                <div class="gender-details">
                    <input type="radio" value="Male" name="gender" id="dot-1" onChange={(e)=>setGender(e.target.value)}/>
                    <input type="radio" value="Female" name="gender" id="dot-2" onChange={(e)=>setGender(e.target.value)}/>
                    <input type="radio" value="Prefer not to say" name="gender" id="dot-3" onChange={(e)=>setGender(e.target.value)}/>
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

export default EditProfile;
