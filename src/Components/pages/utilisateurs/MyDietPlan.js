import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import './UserP.css';


const MyDietPlan = () => {
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

  return (
    <div class="user-wrapper">
        <div class="left-sidebar">
                <ul>
                    <li><a href="/user"><i class="fas fa-user"/>My Profile</a></li>
                    <li><a href="/edit-profile"><i class="fas fa-edit"/>Edit Profile</a></li>
                    <li><a href="/myWorkout"><i class="fas fa-walking"/>My WorkoutPlan</a></li>
                    <li><a href="myDiet"><i class="fas fa-apple-alt"/>My DietPlan</a></li>
                    <li><a href="/sign-up"><i class="fas fa-sign-out-alt"/>LogOut</a></li>
                </ul>

            </div>
            <div class="users-content">
            <div class="change-profile">
            <div class="admin-content">
             <div class="content">
                 <h2 class="page-title">Diets I Follow</h2>
                 <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>DietPlan</th>
              <th>Dietician</th>
              <th>Start Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
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
      <h2>Add a DietPlan</h2>
      <form onSubmit={handleAddFormSubmit}>
        <select
          type="text"
          name="plan"
          required="required"
          onChange={handleAddFormChange}
        >
        <option></option>
        <option value="Low Calorie">Low Calorie</option>
        <option value="Low-Carbohydrates">Low-Carbohydrates</option>
        <option value="Low Fat">Low Fat</option>
        <option value="Balanced">Balanced</option>
        <option value="Weight Gain">Weight Gain</option>
        </select>
        <select
          type="text"
          name="professional"
          required="required"
          onChange={handleAddFormChange}
        >
        <option></option>
        <option value='X' >No Dietician</option>
        <option value="Karen Karam">Karen Karam</option>
        <option value="Jose Guardiola">Jose Guardiola</option>
        <option value="Paula Scholes">Paula Scholes</option>
        <option value="Pep Morinho">Pep Morinho</option>
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
           
  );
};

export default MyDietPlan;