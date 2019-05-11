import React from 'react';
import propTypes from 'prop-types';
import styles from './BookListItem.module.css';

const BookListItem = ({
  image,
  title,
  description,
  author,
  publisher,
  publishedDate,
  pageCount,
  rating = 0,
}) => (
  <div className={styles.bookCard}>
    <img src={image} alt="" />
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.text}>
      <span className={styles.subtitle}>Description: </span>
      {description}
    </p>
    <p className={styles.text}>
      <span className={styles.subtitle}>Author: </span>
      {author}
    </p>
    <p className={styles.text}>
      <span className={styles.subtitle}>Publisher: </span>
      {publisher}
    </p>
    <p className={styles.text}>
      <span className={styles.subtitle}>Published date: </span>
      {publishedDate}
    </p>
    <p className={styles.text}>
      <span className={styles.subtitle}>Page count: </span>
      {pageCount}
    </p>
    <p className={styles.text}>
      <span className={styles.subtitle}>Rating: </span>
      {rating}
    </p>
  </div>
);

BookListItem.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string,
  author: propTypes.string.isRequired,
  publisher: propTypes.string,
  publishedDate: propTypes.string,
  pageCount: propTypes.number,
  rating: propTypes.number,
};

BookListItem.defaultProps = {
  description: '',
  publisher: '',
  publishedDate: '',
  pageCount: 0,
  rating: 0,
};
export default BookListItem;
