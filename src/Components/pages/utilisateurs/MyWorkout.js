import React from 'react'
import "../../pages/utilisateurs/MyWorkout.css"

function MyWorkout(){
    function myFunction() {
        var element = document.getElementById("myDIV");
        element.classList.add("mystyle");
      }

      function myCreateFunction() {
        var table = document.getElementById("myTable");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = "Number";
        cell2.innerHTML = "Category";
        cell3.innerHTML = "Coach";
        cell4.innerHTML = "StartDate";
        cell5.innerHTML = <a href="#" class="edit">highlight</a>;
        
        
      }
      
      function myDeleteFunction() {
        document.getElementById("myTable").deleteRow(0);
      }


    return(
        <>
        <div class="user-wrapper">
        <div class="left-sidebar">
                <ul>
                    <li><a href="/user"><i class="fas fa-user"/>My Profile</a></li>
                    <li><a href="/edit-profile"><i class="fas fa-edit"/>Edit Profile</a></li>
                    <li><a href="#"><i class="fas fa-walking"/>My WorkoutPlan</a></li>
                    <li><a href="#"><i class="fas fa-apple-alt"/>My DietPlan</a></li>
                    <li><a href="/sign-up"><i class="fas fa-sign-out-alt"/>LogOut</a></li>
                </ul>

            </div>
            <div class="users-content">
            <div class="change-profile">
            <div class="admin-content">
             <button onClick={myCreateFunction}>Add Workout</button>
             <button onClick={myDeleteFunction}>Delete Top Workout</button>
             

             <div class="content">
                 <h2 class="page-title">Workouts I Follow</h2>
                 <table id="myTable">
                     <thead>
                         <th>N</th>
                         <th>Category</th>
                         <th>Coach</th>
                         <th>Start Date</th>
                         <th colSpan="2">Action</th>
                     </thead>
                     <tbody>
                         <tr>
                             <td>1</td>
                             <td>Toning</td>
                             <td>Elie</td>
                             <td><time datetime="2021-01-13">January 13, 2021</time></td>
                             <td><a href="#" class="edit">highlight</a></td>
                             <td><a href="#" class="publish">delete</a></td>
                         </tr>
                         <tr>
                             <td>2</td>
                             <td>Muscle Building</td>
                             <td>Coach</td>
                             <td>Start Date </td>
                             <td><a href="#" class="edit">highlight</a></td>
                             <td><a href="#" class="publish">delete</a></td>
                         </tr>
                     </tbody>
                 </table>

             </div>

         </div>

            </div>
            
            </div>
            </div>

        </>
    )
    
}

export default MyWorkout;