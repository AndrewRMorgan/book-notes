import React from 'react';
import ReactDOM from 'react-dom';

const BookListItem = ({book, onBookSelect} => {
  return (
    <li onClick={() => onBookSelect(book)} className="list-group-item">
      <div className="main">
        <div className="title">{book.title}</div>
        <div className="snippet">{book.snippet}</div>
      </div>
    </li>
  );
});

export default BookListItem;
