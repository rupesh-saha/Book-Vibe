import React from 'react';
import hero from '/public/hero_img.jpg';
import AllBooks from './AllBooks';
import Banner from './Banner';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <AllBooks></AllBooks>
    </div>
  );
};

export default HomePage;