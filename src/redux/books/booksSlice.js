import axios from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const appId = 'CLgGIDpkjoG4m2XRwy9u';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const addBookToApi = createAsyncThunk('books/addBook', async (book, thunkAPI) => {
  try {
    const response = await axios({
      method: 'POST',
      url: baseUrl,
      data: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 201) {
      thunkAPI.dispatch(fetchBooks());
    }
    return book;
  } catch (error) {
    return { error: error.message };
  }
});

export const deleteBookFromApi = createAsyncThunk('books/deleteBook', async (bookId) => {
  try {
    await axios.delete(`${baseUrl}/${bookId}`);
    return bookId;
  } catch (error) {
    return error;
  }
});

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
    builder.addCase(addBookToApi.fulfilled, (state, action) => {
      state.books = action.payload;
    });
    builder.addCase(deleteBookFromApi.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

const booksReducer = booksSlice.reducer;
export default booksReducer;
