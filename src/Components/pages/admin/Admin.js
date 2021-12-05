import React from 'react';
import "../admin/Admin.css";
import {Bouton, Bouton1} from "../../Button";
function Admin (){
    return(
        <>
        <div class="admin-wrapper">
            <div class="left-sidebar">
                <ul>
                    <li><a href="/admin">Manage Plans</a></li>
                    <li><a href="/users">Manage Users</a></li>
                    <li><a href="/pros">Manage Professionals</a></li>
                </ul>

            </div>

            <div class="admin-content">
                {/* <div class="button-group">
        <Bouton1 className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          Remove Plan
        </Bouton1>
                </div> */}

                <div class="content">
                    <h2 class="page-title">Manage Plans</h2>
                    <br/>
                    <h3 class="page-title">Manage WorkoutPlans</h3>
                    <table>
                        
                        <thead>
                            <th>N</th>
                            <th>Category</th>
                            <th>Trainer</th>
                            <th colSpan="3">Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Lose Weight</td>
                                <td>Jeff</td>
                                <td><a href="#" class="edit">edit</a></td>
                                <td><a href="#" class="delete">delete</a></td>
                                <td><a href="#" class="publish">publish/hide</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Toning</td>
                                <td>Marvin</td>
                                <td><a href="#" class="edit">edit</a></td>
                                <td><a href="#" class="delete">delete</a></td>
                                <td><a href="#" class="publish">publish/hide</a></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <br/>

                <div class="content">
                    <h3 class="page-title">Manage DietPlans</h3>
                    <table>
                        
                        <thead>
                            <th>N</th>
                            <th>Category</th>
                            <th>Dietician</th>
                            <th colSpan="3">Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Balanced</td>
                                <td>Paula Scholes</td>
                                <td><a href="#" class="edit">edit</a></td>
                                <td><a href="#" class="delete">delete</a></td>
                                <td><a href="#" class="publish">publish/hide</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Lose Fat</td>
                                <td>Karen Karam</td>
                                <td><a href="#" class="edit">edit</a></td>
                                <td><a href="#" class="delete">delete</a></td>
                                <td><a href="#" class="publish">publish/hide</a></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>

        </div>


        </>
    )


}


export default Admin;