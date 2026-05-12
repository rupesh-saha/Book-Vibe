import React, { useContext } from 'react';
import { BookContext } from '../../ Context/BookProvider';
import BookCard from '../../Pages/HomePage/BookCard';
import { Link } from 'react-router';


const ReadList = () => {
  const {storedBook} = useContext(BookContext);

  if (storedBook.length === 0) {
    return(
      <div className="hero bg-base-200 h-[60vh]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Readlist is Empty</h1>
            <p className="py-6">
              Add books to the readlist to preview
            </p>
            <Link to={"/"} className="btn btn-primary">Go to Home</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="my-12 mx-auto flex flex-col items-center">

      <h1 className="font-bold text-3xl md:text-4xl text-center mb-6">Read-list Books</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">

        {storedBook.map((book, index) => <BookCard key={index} book={book}></BookCard>)}

      </section>
      
    </div>
  );
};

export default ReadList;