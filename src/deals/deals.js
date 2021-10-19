import React from "react";
import {Carousel} from 'react-bootstrap'
import './deals.css';
function Deals() {
  return (
    <div className="deals-component">
        
      {/* <p>this is menuitem component</p> */}
      <h2>Deals</h2>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 img1"
      src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEdHHHNT38Vi1fredSda961Z3OyNfbHga4Q&usqp=CAU"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Fruits</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img1"
      src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXYRmeIsB1WrLQGgHVjAh5UYsNsZKiFP04Q&usqp=CAU"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img1"
      src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9xTVVW5shCPvH9kJRq8nFFYe-qLV7tX5JQ&usqp=CAU"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  
    </div>
  );
}

export default Deals;