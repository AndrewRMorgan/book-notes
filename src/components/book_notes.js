import React from 'react';
import ReactDOM from 'react-dom';

const BookNotes = ({title, notes, onTitleChange, onNotesChange}) => {

  render() {
    return (
      <div>
        <input value={title} onChange={onTitleChange}></input>
        <textarea value={notes} onChange={onNotesChange}></textarea>
      </div>
    );
  }
};

export default BookNotes;
