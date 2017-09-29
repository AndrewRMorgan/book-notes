import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './components/book_list';
import BookNotes from './components/book_notes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      selectedBookTitle: '',
      selectBookNotes: '',
    };
  }

  handleTitleChange(event) {
    this.setState({
      selectedBookTitle: event.target.value
    });
  };

  handleNotesChange(event) {
    this.setState({
      selectedBookNotes: event.target.value
    });
  };

  render() {
    return (
      <div>
        <BookList
          books={this.state.books}
          onBookSelect={selectedBook => this.setState({selectedBook}) }/>
        <BookNotes
          title={this.state.selectedBook.title}
          notes={this.state.selectedBook.notes}
          onTitleChange={this.handleTitleChange}
          onNotesChange={this.handleNotesChange}/>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
