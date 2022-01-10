import React from 'react';
import "../admin/Admin.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectCounter } from '../../../redux/userCounter';
import { selectCounter1 } from '../../../redux/userCounter1';
import { selectCounter2 } from '../../../redux/userCounter2';
import { selectCounter3 } from '../../../redux/userCounter3';
import { selectCounter4 } from '../../../redux/userCounter4';
import { useSelector } from 'react-redux';
import { logout } from '../../../redux/userSlicer';
function Admin (){
    const dispatch=useDispatch();
    const c=useSelector(selectCounter);
    const c1=useSelector(selectCounter1);
    const c2=useSelector(selectCounter2);
    const c3=useSelector(selectCounter3);
    const c4=useSelector(selectCounter4);
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
                            <th>Clicked on</th>
                            <th colSpan="3">Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Lose Weight</td>
                                <td>Jeff</td>
                                <td>{c.valeur}</td>
                                <td><Link to="#" class="edit">edit</Link></td>
                                <td><Link to="#" class="delete">delete</Link></td>
                                <td><Link to="#" class="publish">publish/hide</Link></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Toning</td>
                                <td>Simon</td>
                                <td>{c1.value}</td>
                                <td><Link to="#" class="edit">edit</Link></td>
                                <td><Link to="#" class="delete">delete</Link></td>
                                <td><Link to="#" class="publish">publish/hide</Link></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Toning</td>
                                <td>Jen</td>
                                <td>{c2.value}</td>
                                <td><Link to="#" class="edit">edit</Link></td>
                                <td><Link to="#" class="delete">delete</Link></td>
                                <td><Link to="#" class="publish">publish/hide</Link></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Toning</td>
                                <td>Michele</td>
                                <td>{c3.value}</td>
                                <td><Link to="#" class="edit">edit</Link></td>
                                <td><Link to="#" class="delete">delete</Link></td>
                                <td><Link to="#" class="publish">publish/hide</Link></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Toning</td>
                                <td>X</td>
                                <td>{c4.value}</td>
                                <td><Link to="#" class="edit">edit</Link></td>
                                <td><Link to="#" class="delete">delete</Link></td>
                                <td><Link to="#" class="publish">publish/hide</Link></td>
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
                                <td><Link to="#" class="edit">edit</Link></td>
                                <td><Link to="#" class="delete">delete</Link></td>
                                <td><Link to="#" class="publish">publish/hide</Link></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Low Fat</td>
                                <td>Karen Karam</td>
                                <td><Link to="#" class="edit">edit</Link></td>
                                <td><Link to="#" class="delete">delete</Link></td>
                                <td><Link to="#" class="publish">publish/hide</Link></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Low Calorie</td>
                                <td>Pep Morinho</td>
                                <td><Link to="#" class="edit">edit</Link></td>
                                <td><Link to="#" class="delete">delete</Link></td>
                                <td><Link to="#" class="publish">publish/hide</Link></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Low Carbohydrate</td>
                                <td>X</td>
                                <td><Link to="#" class="edit">edit</Link></td>
                                <td><Link to="#" class="delete">delete</Link></td>
                                <td><Link to="#" class="publish">publish/hide</Link></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Weight Gain</td>
                                <td>Jose Guardiola</td>
                                <td><Link to="#" class="edit">edit</Link></td>
                                <td><Link to="#" class="delete">delete</Link></td>
                                <td><Link to="#" class="publish">publish/hide</Link></td>
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