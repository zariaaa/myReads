import React from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { debounce } from 'lodash';

class SearchBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: []
        }
        this.handleSearch = debounce(this.search, 300);
    }

    search = (event) => {
        const query = event.target.value;
        if (!query) {
            this.setState({ searchTerm: [] });
        }

        BooksAPI.search(query, 20).then(searchTerm => {

            if (!searchTerm || searchTerm.error) {
                this.setState({ searchTerm: [] });
                return;
            }

            const searchTermValue = searchTerm.map((book) => {
                const searchBook = this.props.books.find(bookValue => bookValue.id === book.id);
                book.shelf = searchBook ? searchBook.shelf : "none";
                return book;
            });
            this.setState({ searchTerm: searchTermValue })
        });
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            minLength="2"
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.search}>
                        </input>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchTerm && this.state.searchTerm.map((book) => (
                            <li key={book.id}>
                                <Book book={book} onSelectChange={this.props.onSelectChange} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

        )
    }
}

export default SearchBook;