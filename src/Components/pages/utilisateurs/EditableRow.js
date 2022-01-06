import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <select
          type="text"
          required="required"
          name="plan"
          value={editFormData.plan}
          onChange={handleEditFormChange}
        >
        <option value="Low Calorie">Low Calorie</option>
        <option value="Low-Carbohydrates">Low-Carbohydrates</option>
        <option value="Low Fat">Low Fat</option>
        <option value="Balanced">Balanced</option>
        <option value="Weight Gain">Weight Gain</option>
        </select>
      </td>
      <td>
        <select
          type="text"
          required="required"
          name="professional"
          value={editFormData.professional}
          onChange={handleEditFormChange}
        >
        <option></option>
        <option value="X" >No Dietician</option>
        <option value="Karen Karam">Karen Karam</option>
        <option value="Jose Guardiola">Jose Guardiola</option>
        <option value="Paula Scholes">Paula Scholes</option>
        <option value="Pep Morinho">Pep Morinho</option>

        </select>
      </td>
      <td>
        <input
          type="date"
          required="required"
          name="startDate"
          value={editFormData.startDate}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};



export default EditableRow;
