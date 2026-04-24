import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const BookCard = ({book}) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 w-96 shadow">
      <figure>
        <img
          src={book.image} className="w-[200px] h-[300px] m-4 rounded-xl"
          alt="Shoes" />
      </figure>
      <div className="card-body">

        <div className="flex gap-2">
          {
            book.tags.map(label => <div className="text-green-500 bg-green-100 p-1.5 rounded-xl">{label}</div>)
          }
        </div>
        

        <h2 className="card-title text-2xl">
          {book.bookName}
        </h2>
        <p className="font-medium my-1">By : {book.author}</p>

        <div className="card-actions border-t border-dashed border-gray-300 pt-3 flex justify-between">
          <div className="badge badge-outline">{book.category}</div>
          <div className="flex items-center justify-center text-2xl">
            <div className="badge">{book.rating}</div> 
            <CiStar></CiStar>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;