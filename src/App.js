import React, {Component} from 'react';
import './App.css';
import Parameters from './Parameters/Parameters';
import BookList from './BookList/BookList';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    bookList: {}
  }
}

  render() {
    return (
      <div className='app'>
        <h1>Google Book Search</h1>
        <Parameters />
        <BookList bookList={this.state.bookList}/>
      </div>
    )
  }
}

export default App;
