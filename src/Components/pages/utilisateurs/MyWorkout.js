import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import data from "./mock-wdata.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRowT from "./EditableRowT";
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/userSlicer';
import { logout1 } from '../../../redux/userEdit';



function MyWorkout(){
  const dispatch=useDispatch();
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      plan: "",
      professional: "",
      startDate: "",
    });
  
    const [editFormData, setEditFormData] = useState({
      plan: "",
      professional: "",
      startDate: "",
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
        startDate: addFormData.startDate,
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
        startDate: editFormData.startDate,
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
        startDate: contact.startDate,
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
    const deconnecter=()=>{
      dispatch(logout());
  }
 const deconnecter1=()=>{
      dispatch(logout1());
  }
  const si=()=>{
      deconnecter();
      deconnecter1();
  }

  
    return (
      <div class="user-wrapper">
           <div class="left-sidebar">
                <ul>
                    <li><Link to="/user"><i class="fas fa-user"/>My Profile</Link></li>
                     <li><Link to='/edit-profile' ><i class="fas fa-edit"/> Edit Profile</Link></li>
                    <li><Link to="/myWorkout"><i class="fas fa-walking"/>My WorkoutPlan</Link></li>
                    <li><Link to="/myDiet"><i class="fas fa-apple-alt"/>My DietPlan</Link></li>
                    <li><Link to="./sign-up" onClick={si}><i class="fas fa-sign-out-alt"/>LogOut</Link></li>
                </ul>

            </div>
              <div class="users-content">
              <div class="change-profile">
              <div class="admin-content">
               <div class="content">
                   <h2 class="page-title">Workouts I Follow</h2>
                   <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>WorkoutPlan</th>
                <th>Trainer</th>
                <th>Start Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <EditableRowT
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
          <select
            type="text"
            name="professional"
            required="required"
            onChange={handleAddFormChange}
          >
          <option></option>
          <option value='X' >No Trainer</option>
          <option value="Michel">Michel</option>
          <option value="Jen">Jen</option>
          <option value="Jeff">Jeff</option>
          <option value="Simon">Simon</option>
          </select>
          <input
            type="date"
            name="startDate"
            required="required"
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
  
          </div>
  
          </div>
  
          </div>
              
          </div>
    
    )
    
}

export default MyWorkout;