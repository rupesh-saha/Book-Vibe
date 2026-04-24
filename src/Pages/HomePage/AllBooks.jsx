import React, { use } from 'react';
import BookCard from './BookCard';

const bookPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
  const books = use(bookPromise);
  console.log(books);

  return (
    <div className="my-12 mx-auto flex flex-col items-center">

      <h1 className="font-bold text-3xl md:text-5xl text-center mb-6">Books</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">

        {books.map((book, index) => <BookCard key={index} book={book}></BookCard>)}

      </section>
      
    </div>
  );
};

export default AllBooks;