import React from 'react';
import propTypes from 'prop-types';
import BookListItem from '../BookListItem/BookListItem';
import styles from './BooklList.module.css';

const BookList = ({ items }) => (
  <ul className={styles.bookList}>
    {items.map(item => (
      <li key={item.id}>
        <BookListItem {...item} />
      </li>
    ))}
  </ul>
);

BookList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({ id: propTypes.string.isRequired }).isRequired,
  ).isRequired,
};

export default BookList;
