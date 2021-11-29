import React from 'react';
import "../admin/Admin.css";
import {Bouton} from "../../Button";
function Pros (){
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
                                <td>Guardiola</td>
                                <td>Pep</td>
                                <td>pepnumber1@gmail.com </td>
                                <td><a href="#" class="edit">ban</a></td>
                                <td><a href="#" class="publish">remove</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mourad</td>
                                <td>Marvin</td>
                                <td>okokokokokok@gmai.com</td>
                                <td><a href="#" class="edit">ban</a></td>
                                <td><a href="#" class="publish">remove</a></td>
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
                                <td>Guardiola</td>
                                <td>Pep</td>
                                <td>pepnumber1@gmail.com </td>
                                <td><a href="#" class="edit">ban</a></td>
                                <td><a href="#" class="publish">remove</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mourad</td>
                                <td>Marvin</td>
                                <td>okokokokokok@gmai.com</td>
                                <td><a href="#" class="edit">ban</a></td>
                                <td><a href="#" class="publish">remove</a></td>
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