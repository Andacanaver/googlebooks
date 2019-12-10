import React, {Component} from 'react';
import './BookList.css';

class BookList extends Component {
    
    render() {
        const list = this.props.bookList.items
        return(
            <ul>
                <li>{list}</li>
                {console.log('this worked')}
            </ul>
        )
    }
}

export default BookList;