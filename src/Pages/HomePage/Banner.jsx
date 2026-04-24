import React from 'react';
import hero from '/public/hero_img.jpg';

const Banner = () => {
  return (
    <div className="hero bg-base-200  md:min-h-[70vh] items-start lg:items-center p-8 lg:pt-0">
      <div className="hero-content flex-col gap-2 lg:flex-row-reverse justify-between w-full max-w-[1171px] py-0">
        <img
          src={hero}
          className="w-full lg:w-1/2 rounded-lg shadow-2xl object-cover"
        />
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <p className="py-2 md:py-6 text-base text-gray-500">
            Discover your next favourite read from our curated collection.
          </p>
          <button class="btn btn-accent text-amber-50">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;