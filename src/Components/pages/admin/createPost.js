import React from 'react';
import "../admin/Admin.css";
import {Bouton} from "../../Button";
function createPost(){
    return(
<div class="admin-wrapper">
    <div class="left-sidebar">
        <ul>
            <li><a href="/admin">Manage Plans</a></li>
            <li><a href="/users">Manage Users</a></li>
            <li><a href="/pros">Manage Professionals</a></li>
        </ul>

    </div>

    <div class="admin-content">
 
        </div>

        <div class="content">
           

      

    </div>

</div>
    )
}
export default createPost;