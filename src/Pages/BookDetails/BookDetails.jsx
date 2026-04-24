import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
  const { id } = useParams();
  console.log(id);

  const books = useLoaderData();
  console.log(books);

  const expectedBook = books.find(book => book.bookId == id);
  console.log(expectedBook);

  return (
    <div className="card grid grid-cols-1 md:grid-cols-2 lg:card-side bg-base-100 shadow-sm mt-3 mx-2.5 items-start mb-4">
      <figure className="bg-slate-50 rounded-xl py-12">
        <img
          src={expectedBook.image} className="w-[250px] h-[350px] md:w-[350px] md:h-[550px] rounded-xl"
          alt="Album" />
      </figure>
      <div className="card-body">
        <h1 className="card-title font-extrabold text-3xl md:text-5xl">{expectedBook.bookName}</h1>
        <p className="font-medium">By : {expectedBook.author}</p>

        <div className="border-t border-b border-slate-300 py-2 mt-2">
          <span>{expectedBook.category}</span>
        </div>

        <p className="my-2">
          {expectedBook.review}
        </p>

        <div className="flex gap-2 items-center border-b border-slate-300 pb-4 mb-3">
          <span className="font-semibold">Tag:</span>

          {
            expectedBook.tags.map(label => <div className="text-green-500 bg-green-100 p-1.5 rounded-xl">{label}</div>)
          }
        </div>

        <div className="grid grid-cols-2 gap-y-2 text-sm md:text-base">
          <span className="text-gray-400">Number of Pages:</span>
          <span className="font-bold">{expectedBook.totalPages}</span>

          <span className="text-gray-400">Publisher:</span>
          <span className="font-bold">{expectedBook.publisher}</span>

          <span className="text-gray-400">Year of Publishing:</span>
          <span className="font-bold">{expectedBook.yearOfPublishing}</span>

          <span className="text-gray-400">Rating:</span>
          <span className="font-bold">{expectedBook.rating}</span>
        </div>
        

        <div className="card-actions flex gap-2 mt-auto">
          <button className="btn text-black font-bold">Read</button>
          <button class="btn btn-accent text-amber-50">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;