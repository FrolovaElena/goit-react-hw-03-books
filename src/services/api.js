import axios from 'axios';

const URL = `https://www.googleapis.com/books/v1/volumes?q=`;

const fetchBooks = (genre, query) =>
  axios.get(`${URL}${query}+subject:${genre}`);

export default fetchBooks;
