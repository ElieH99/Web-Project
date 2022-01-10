import React from 'react';
import "../admin/Admin.css";
import { Link } from 'react-router-dom';
function CreatePost(){
    return(
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
 
        </div>

        <div class="content">
           

      

    </div>

</div>
    )
}
export default CreatePost;