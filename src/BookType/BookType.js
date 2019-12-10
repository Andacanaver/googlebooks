import React, {Component} from 'react'
import './BookType.css';

class BookType extends Component {
    render() {
        return (
          <>
            <p>Book Type: </p>
            <select
              id="book-type"
              name="book-type"
              onChange={e => this.props.bookChanged(e.target.value)}>
              <option value="Full">Full</option>
              <option value="Partial">Partial</option>
              <option value="Free-ebooks">Free-ebooks</option>
              <option value="Paid-ebooks">Paid-ebooks</option>
              <option value="Ebooks">Ebooks</option>
            </select>
          </>
        );
    }
}

export default BookType;