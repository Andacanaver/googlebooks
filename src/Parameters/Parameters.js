import React, {Component} from 'react';
import './Parameters.css';
import Types from '../Types/Types';
import SearchBox from '../SearchBox/SearchBox';

class Parameters extends Component {
    constructor(props) {
        super(props) ;
        this.state = {
            print: 'All',
            book: 'Full',
            search: '',
            
        };
    }
    printChanged(print) {
        this.setState({
            print
        })
    }
    
    bookChanged(book) {
        this.setState({
            book
        })
    }
    searchChange(e) {
        this.setState({search: e.target.value});
    }
    
    render() {
        return (
          <section className="parameters">
            <SearchBox
              searchHandler = {e => this.searchChange(e)}
              search={this.state.search}
              print={this.state.print}
              book={this.state.book}
              
            />
            <Types
              print={this.state.print}
              book={this.state.book}
              bookChanged={book => this.bookChanged(book)}
              printChanged={print => this.printChanged(print)}
            />
          </section>
        );
    }
}

export default Parameters;