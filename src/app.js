import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './components/book_list';
import BookNotes from './components/book_notes';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      books: []
    };

    var books = JSON.parse(localStorage.getItem('books')) || [];

    this.setState({
      books: books
    });
  }
  render() {
    return (
      <div>
        <BookList
          books={this.state.books}
          onBookSelect={selectedBook => this.setState({selectedBook}) }/>
        <BookNotes book={this.state.selectedBook}/>
      </div>;
    )
  }
}



//localStorage.setItem('books', JSON.stringify(todos));

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
