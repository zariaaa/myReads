import React from 'react';
import { Link } from 'react-router-dom';
import BookSelect from './BookSelect';

const BooksCatalog = props => {

    const { onSelectChange } = props;
    const currentlyReading = props.books.filter((book) => book.shelf === 'currentlyReading');
    const wantToRead = props.books.filter((book) => book.shelf === 'wantToRead');
    const read = props.books.filter((book) => book.shelf === 'read');


    return (
        <div className="list-books">
            <div className="list-books-content">
                <div>
                    <BookSelect
                        selectTitle='Currently Reading'
                        selectBooks={currentlyReading}
                        onSelectChange={onSelectChange}
                    />
                    <BookSelect
                        selectTitle='Want to Read'
                        selectBooks={wantToRead}
                        onSelectChange={onSelectChange}
                    />
                    <BookSelect
                        selectTitle='Read'
                        selectBooks={read}
                        onSelectChange={onSelectChange}
                    />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">
                    Add book
                </Link>
            </div>
        </div>
    )
}
export default BooksCatalog;