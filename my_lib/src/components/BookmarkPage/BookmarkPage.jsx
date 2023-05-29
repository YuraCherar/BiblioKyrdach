import React, { useState } from 'react';
import Book from './Book';

const BookmarkPage = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const removeBookmark = (bookId) => {
    setBookmarks(bookmarks.filter((book) => book.id !== bookId));
  };

  return (
    <div>
      <h1>Bookmark Page</h1>
      {bookmarks.map((book) => (
        <Book key={book.id} book={book} removeBookmark={removeBookmark} />
      ))}
    </div>
  );
};

export default BookmarkPage;