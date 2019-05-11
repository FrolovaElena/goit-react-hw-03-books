import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  static propTypes = {
    genres: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    onSubmit: propTypes.func.isRequired,
  };

  state = {
    value: '',
    genre: '',
  };

  handleInputChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSelectorChange = event => {
    this.setState({ genre: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.genre, this.state.value);
    this.setState({ value: '', genre: '' });
  };

  render() {
    const { value, genre } = this.state;
    const { genres } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <input
          type="text"
          value={value}
          onChange={this.handleInputChange}
          className={styles.input}
        />

        <select
          value={genre}
          onChange={this.handleSelectorChange}
          className={styles.select}
        >
          {genres.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    );
  }
}
