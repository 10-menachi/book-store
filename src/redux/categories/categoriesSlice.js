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

const categoryReducer = categorySlice.reducer;

export const { checkStatus } = categorySlice.actions;
export default categoryReducer;
