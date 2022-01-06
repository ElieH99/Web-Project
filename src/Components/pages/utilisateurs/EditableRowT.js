import React from "react";

const EditableRowT = ({
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
          <option value="Lose Weight">Lose Weight</option>
          <option value="Gain Weight">Gain Weight</option>
          <option value="Stay in Shape">Stay in Shape</option>
          <option value="Body Building">Body Building</option>
          <option value="Toning">Toning</option>
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
          <option value='X' >No Trainer</option>
          <option value="Michel">Michel</option>
          <option value="Jen">Jen</option>
          <option value="Jeff">Jeff</option>
          <option value="Simon">Simon</option>
  
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

  export default EditableRowT;