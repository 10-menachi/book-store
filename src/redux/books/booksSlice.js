const { createSlice } = require('@reduxjs/toolkit');

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    deleteBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
    }),
  },
});

const booksReducer = booksSlice.reducer;
export const { addBook, deleteBook } = booksSlice.actions;
export default booksReducer;
