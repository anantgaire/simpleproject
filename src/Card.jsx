import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Card, Button, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Cards = (props) => {
  return (
    <>
      <Col className="col-md-4 col-10 mx-auto">
        <div className="card">
          <Card style={{ width: '100%' }}>
            <Card.Img
              variant="top"
              src={props.imgsrc}
              height="300px"
              alt={props.title}
            />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <NavLink to="/" className="btn btn-primary">
                Know more
              </NavLink>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </>
  );
};

export default Cards;
