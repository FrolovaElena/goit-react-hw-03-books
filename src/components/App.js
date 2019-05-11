import React, { Component, Fragment } from 'react';
import SearchForm from './SearchForm/SearchForm';
import BookList from './BookList/BookList';
import Loader from './Loader/Loader';
import genres from '../assets/genres.json';
import fetchBooks from '../services/api';

const mapper = data =>
  data.map(
    ({
      id,
      volumeInfo: {
        imageLinks: { thumbnail: image },
        authors: [author],
        averageRating: rating,
        ...props
      },
    }) => ({ id, image, author, rating, ...props }),
  );

export default class App extends Component {
  state = {
    items: [],
    isLoading: false,
  };

  componentDidMount() {
    fetchBooks('fantasy').then(data => {
      this.setState({ items: mapper(data.data.items) });
    });
  }

  componentDidUpdate(prevState) {
    const { genre: prevGenre } = prevState;
    const { genre: nextGenre } = this.state;

    if (prevGenre !== nextGenre) {
      this.getBooks(nextGenre);
    }
  }

  getBooks = (genre, query) => {
    this.setState({ isLoading: true });

    fetchBooks(genre, query)
      .then(data => this.setState({ items: mapper(data.data.items) }))
      .catch(error => error.statusText)
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { items, isLoading } = this.state;
    return (
      <Fragment>
        <SearchForm genres={genres} onSubmit={this.getBooks} />
        {isLoading && <Loader />}
        {items.length > 0 && <BookList items={items} />}{' '}
      </Fragment>
    );
  }
}
