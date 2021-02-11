import React from 'react';
import Sdata from './Sdata';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Card, Button } from 'react-bootstrap';
import Cards from './Card';

const Service = () => {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5 overflow-hidden">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((value, index) => {
                return (
                  <Cards
                    key={index}
                    imgsrc={value.imgSrc}
                    title={value.title}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
