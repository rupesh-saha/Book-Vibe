import React, { useState } from 'react';
import { createContext } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {

  const [storedBook, setStoredBook] = useState([]);
  const [wishlistBook, setWishlistBook] = useState([]);
  
  const handleMarkAsRead = (currentBook) => {
  
    const isExists = storedBook.find(book => book.bookId == currentBook.bookId);

    if (isExists) {

      toast.error(`${currentBook.bookName} is already in the list`);
    } 
    else {
      setStoredBook([...storedBook, currentBook]);
      toast.success(`${currentBook.bookName} is added to list`);
    }
  
  }

  const handleWishlist = (currentBook) => {

    const isExistsInStoredList = storedBook.find(book => book.bookId == currentBook.bookId);

    if (isExistsInStoredList) {
      toast.error(`${currentBook.bookName} is already in the readlist`);
      return;
    }
  
    const isExists = wishlistBook.find(book => book.bookId == currentBook.bookId);

    if (isExists) {
      toast.error(`${currentBook.bookName} is already in the wishlist`);
    } 
    else {
      setWishlistBook([...wishlistBook, currentBook]);
      toast.success(`${currentBook.bookName} is added to wishlist`);
    }
  
  }


  const data = {
    storedBook,
    setStoredBook,
    handleMarkAsRead,
    wishlistBook,
    setWishlistBook,
    handleWishlist
  }


  return <BookContext.Provider value={data}>
    {children}
  </BookContext.Provider>
};

export default BookProvider;