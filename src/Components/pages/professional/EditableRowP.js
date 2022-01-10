import React from "react";

const EditableRowP = ({
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
          <input
            type="text"
            required="required"
            name="professional"
            value={editFormData.professional}
            onChange={handleEditFormChange}
          />
         
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

  export default EditableRowP;