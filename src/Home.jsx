import React from 'react';

import Common from './Common';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
      <Common
        name="Gorw your business with "
        imgsrc="https://cdn.lynda.com/course/567793/567793-637430507294175854-16x9.jpg"
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
