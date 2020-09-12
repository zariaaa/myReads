import React from 'react';
import Book from './Book';

const BookSelect = props => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.selectTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.selectBooks.map((book) => {
                        return (
                            <li key={book.id}>
                                <Book book={book} onSelectChange={props.onSelectChange} />
                            </li>
                        )
                    })
                    }
                </ol>
            </div>
        </div>
    )
}

export default BookSelect;