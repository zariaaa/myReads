import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import SearchBook from './SearchBook';
import BooksCatalog from './BooksCatalog';
import * as BooksAPI from './BooksAPI';
import './App.css';

class App extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => { this.setState({ books }) });
  }

  onSelectChange = (book, position) => {
    book.shelf = position;
    this.setState(state => ({ books: state.books.filter(bookVal => bookVal.id !== book.id).concat([book]) }));
    BooksAPI.update(book, position);
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <div className="list-books-title">
                  <h1>My Reads</h1>
                </div>
                <BooksCatalog books={this.state.books} onSelectChange={this.onSelectChange} />
              </div>
            )} />
          <Route
            path="/search"
            render={({ history }) => (<SearchBook
              onSelectChange={this.onSelectChange}
              history={history}
              books={this.state.books} />)} />
        </Router>
      </div>
    )
  }
}

export default App;