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
                <div class="button-group">
        <Bouton className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          Remove User
        </Bouton>
                </div>

                <div class="content">
                    <h2 class="page-title">Manage Users</h2>
                    <table>
                        <thead>
                            <th>N</th>
                            <th>Title</th>
                            <th>User</th>
                            <th colSpan="3">Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>This is us siuuuu</td>
                                <td>Cristiannaa</td>
                                <td><a href="#" class="edit">ban</a></td>
                                <td><a href="#" class="delete">bonus</a></td>
                                <td><a href="#" class="publish">remove</a></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>This is us siuuuu</td>
                                <td>Marvin</td>
                                <td><a href="#" class="edit">edit</a></td>
                                <td><a href="#" class="delete">delete</a></td>
                                <td><a href="#" class="publish">publish</a></td>
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