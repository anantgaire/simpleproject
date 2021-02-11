import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Common from './Common';

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page "
        imgsrc="https://blog.capterra.com/wp-content/uploads/2019/12/Head-The-Ultimate-Guide-on-How-to-Start-Your-Event-Planning-Business-withouttext-1200x630.png"
        visit="/contact"
        btnname="contact Now"
      />
    </>
  );
};

export default About;
