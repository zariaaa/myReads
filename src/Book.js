import React from 'react';

class Book extends React.Component {

    BookStateChanger = (event) => {
        const changeBookState = event.target.value;
        this.props.onSelectChange(this.props.book, changeBookState);
    };

    render() {
        const { book } = this.props;
        let image = book.imageLinks ? book.imageLinks.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 140,
                        height: 200,
                        backgroundImage: `url("${image}")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} />
                    <div className="book-shelf-changer">
                        <select onChange={this.BookStateChanger} value={book.shelf}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(", ") : " Unknown "}</div>
            </div>
        )
    }
}
export default Book;