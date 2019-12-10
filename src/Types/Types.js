import React from 'react';
import './Types.css';
import PrintType from '../PrintType/PrintType';
import BookType from '../BookType/BookType';

function Types(props) {
    return (
        <div className="types">
            <PrintType 
                print={props.print}
                printChanged={props.printChanged}/>
            <BookType 
                book={props.book}
                bookChanged={props.bookChanged}/>
        </div>
    );
}

export default Types;