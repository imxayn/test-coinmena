export const EDIT_DATA = "EDIT_DATA";

export const editData = (updatedData) => {
      return {
          type: EDIT_DATA,
          payload: updatedData
      }
  }
