import React from 'react';
import "../admin/Admin.css";
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/userSlicer';
import { Link } from 'react-router-dom';
function Utilisateur (){
    const dispatch=useDispatch();
    const decon=()=>{
        dispatch(logout())
    }
    return(
        <>
        <div class="admin-wrapper">
            <div class="left-sidebar">
            <ul>
                    <li><Link to="/admin">Manage Plans</Link></li>
                    <li><Link to="/users">Manage Users</Link></li>
                    <li><Link to="/pros">Manage Professionals</Link></li>
                    <li><Link to="/sign-up" onClick={decon}>LogOut</Link></li>
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
                                <td><Link to="#" class="edit">ban</Link></td>
                                <td><Link to="#" class="publish">remove</Link></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Tadros</td>
                                <td>Michel</td>
                                <td>micheltadros@gmail.com </td>
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


export default Utilisateur;