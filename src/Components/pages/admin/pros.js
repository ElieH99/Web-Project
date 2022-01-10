import React from 'react';
import "../admin/Admin.css";
import { Link } from 'react-router-dom';
function Pros (){
    return(
        <>
        <div class="admin-wrapper">
            <div class="left-sidebar">
            <ul>
                    <li><Link to="/admin">Manage Plans</Link></li>
                    <li><Link to="/users">Manage Users</Link></li>
                    <li><Link to="/pros">Manage Professionals</Link></li>
                    <li><Link to="/sign-up">LogOut</Link></li>
                </ul>

            </div>

            <div class="admin-content">
                <div class="content">
                    <h2 class="page-title">Manage Trainers/Dieticians</h2>
                    <h3>Manage Dieticians</h3><br/>
                    <table>
                        <thead>
                            <th>N</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Email address</th>
                            <th colSpan="2">Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Scholes</td>
                                <td>Paula</td>
                                <td>ScholesPaula2@gmail.com </td>
                                <td><Link to="#" class="edit">ban</Link></td>
                                <td><Link to="#" class="publish">remove</Link></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Karam</td>
                                <td>Karen</td>
                                <td>KaramKaren1@gmail.com</td>
                                <td><Link to="#" class="edit">ban</Link></td>
                                <td><Link to="#" class="publish">remove</Link></td>
                            </tr>
                        </tbody>
                    </table>
                    <br/><br/>
                    <h3>Manage Trainers</h3><br/>
                    <table>
                        <thead>
                            <th>N</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Email address</th>
                            <th colSpan="2">Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Hachem</td>
                                <td>Jeff</td>
                                <td>HachemJeff@gmail.com </td>
                                <td><Link to="#" class="edit">ban</Link></td>
                                <td><Link to="#" class="publish">remove</Link></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mourad</td>
                                <td>Marvin</td>
                                <td>MouradMarvin@gmail.com</td>
                                <td><Link to="#" class="edit">ban</Link></td>
                                <td><Link to="#" class="publish">remove</Link></td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>

        </div>


        </>
    )


}


export default Pros;