import React from 'react';
import "../admin/Admin.css";
import {Bouton} from "../../Button";
function Utilisateur (){
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
                    <h2 class="page-title">Manage Users</h2>
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
                                <td>Hanna</td>
                                <td>Elie</td>
                                <td>eliehanna99@gmail.com</td>
                                <td><a href="#" class="edit">ban</a></td>
                                <td><a href="#" class="publish">remove</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Tadros</td>
                                <td>Michel</td>
                                <td>micheltadros@gmail.com </td>
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


export default Utilisateur;