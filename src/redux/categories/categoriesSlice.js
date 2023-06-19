const { createSlice } = require('@reduxjs/toolkit');

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    checkStatus: (state, action) => {
      switch (action.type) {
        default:
          return {
            ...state,
            categories: 'Under Construction',
          };
      }
    },
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
