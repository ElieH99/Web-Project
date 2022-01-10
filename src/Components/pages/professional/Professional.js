import React,{useState,Fragment} from 'react'
import { nanoid } from "nanoid";
import { Link } from 'react-router-dom';
import data from "./mock-Tdata.json"
import "../../pages/utilisateurs/UserP.css"
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/userSlicer';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/userSlicer';
import EditableRowP from './EditableRowP';
import ReadOnlyRow from '../utilisateurs/ReadOnlyRow';
function ProfessionalP(){
    const user=useSelector(selectUser);
    const dispatch=useDispatch();
    const deconnecter=()=>{
        dispatch(logout());
    }
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      plan: "",
      professional: "",
      
    });
  
    const [editFormData, setEditFormData] = useState({
      plan: "",
      professional: "",
      
    });
  
    const [editContactId, setEditContactId] = useState(null);
  
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        id: nanoid(),
        plan: addFormData.plan,
        professional: addFormData.professional,
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);

      

    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editContactId,
        plan: editFormData.plan,
        professional: editFormData.professional,
      };
  
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === editContactId);
  
      newContacts[index] = editedContact;
  
      setContacts(newContacts);
      setEditContactId(null);
    };
  
    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);
  
      const formValues = {
        plan: contact.plan,
        professional: contact.professional,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
  
    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === contactId);
  
      newContacts.splice(index, 1);
  
      setContacts(newContacts);
    };


    return(
        <>
             <div class="user-wrapper">
        <div class="left-sidebar">
                <ul>
                    <li><Link to="./sign-up" onClick={deconnecter}><i class="fas fa-sign-out-alt"/>LogOut</Link></li>
                </ul>
         
        </div>
            <div class="users-content">
            <div class="change-profile">
            <div class="tile-edit">Profile</div>
            <br/>
            <form action='#'>
                <div class="user-details">
                <div class="input-box">
                        <span class="details">Username</span>
                        <input type='text' value={user.name} disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Email</span>
                        <input type='text' value={user.email} disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Password</span>
                        <input type='password'value={user.password} disabled/>
                    </div>
                    <div class="input-box">
                        <span class="details">Status</span>
                        <select name="status" id="availability">
                            <option value=""></option>
                            <option value="Available">Available</option>
                            <option value="NotAvailable">Not Available</option>
                        </select>

                    </div>
                    
                </div>
            </form>
            <h2 class="page-title">Workouts</h2>
                   <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Type de Workout</th>
                <th>Description</th>
                <th></th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRowP
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
        <br/>
            <h2>Add a WorkoutPlan</h2>
        <form onSubmit={handleAddFormSubmit}>
          <select
            type="text"
            name="plan"
            required="required"
            onChange={handleAddFormChange}
          >
          <option></option>
          <option value="Lose Weight">Lose Weight</option>
          <option value="Gain Weight">Gain Weight</option>
          <option value="Stay in Shape">Stay in Shape</option>
          <option value="Body Building">Body Building</option>
          <option value="Toning">Toning</option>
          </select>
          <input
            type="text"
            name="professional"
            required="required"
            onChange={handleAddFormChange}
         / >
          
          <button type="submit">Add</button>
        </form><br/>
        <h2>Appointments</h2>
        <table>    
                    <thead>
                        <th>N</th>
                        <th>Category</th>
                        <th>Client</th>
                        <th>Appointment</th>
                        <th colSpan="2">Action</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Lose Weight</td>
                            <td>Radwan</td>
                            <td>Tuesday  18-01-2022  8:00AM</td>
                            <td><Link to="#" class="edit">Postpone</Link></td>
                            <td><Link to="#" class="delete">Cancel</Link></td>
                            
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Toning</td>
                                <td>Elie</td>
                                <td>Monday 17-01-2022 6:00AM</td>
                                <td><Link to="#" class="edit">Postpone</Link></td>
                            <td><Link to="#" class="delete">Cancel</Link></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Body Building</td>
                                <td>Michel</td>
                                <td>Friday 21-01-2022 6:00PM</td>
                                <td><Link to="#" class="edit">Postpone</Link></td>
                            <td><Link to="#" class="delete">Cancel</Link></td>
                            </tr>
                       
                        </tbody>
                    </table>
        </div>
        
        </div>

            </div>
        
        </>
    );
}

export default ProfessionalP;