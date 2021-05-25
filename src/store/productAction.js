export const EDIT_DATA = "EDIT_DATA";

export const editData = (updatedData) => {
      console.log(updatedData,'number..!!')
      return {
          type: EDIT_DATA,
          payload: updatedData
      }
  }
