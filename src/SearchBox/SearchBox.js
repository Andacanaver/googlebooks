import React, { Component } from "react";
import "./SearchBox.css";

class SearchBox extends Component {
  
   formatQueryParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&');
}
    
  handleSubmit(e) {
    e.preventDefault();
    const searchUrl = 'https://www.googleapis.com/books/v1/volumes';
    const options = {
    method: "GET",
    header: {
      key: "AIzaSyC8-G2KNUsXyx_VTy6nZ7bSeWbOLxcYt2g"
    }
  };
  const searchTerm = this.props.search;
  const params = {
    q: searchTerm,
    filter: this.props.book,
    printType: this.props.print
  }
  const queryString = this.formatQueryParams(params);
  const url = searchUrl + "?" + queryString;
  fetch(url, options)
    .then(res => {
      if(!res.ok) {
        throw new Error("Somthing went wrong");
      }
      return res.json();
    })
    .then(resJson => {
      this.setState({
        bookList: resJson
      })
    })
    .catch(err => {
      this.setState({
        error: err.message
      })
    })
  }

  render() {
    return (
      <div className="search-box">
        <form>
          <label htmlFor="searchbox">Search: </label>
          <input type="text" name="searchbox" id="searchbox" onChange={this.props.searchHandler}/>
          <button type="submit" onClick={e => this.handleSubmit(e)}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox