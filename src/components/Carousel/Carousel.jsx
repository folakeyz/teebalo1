import React from 'react';

import teebalo from '../../assets/teebalo.png';
import slide from '../../assets/slide.jpg';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';



const Slider = () => {
    return(
        <>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={teebalo}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </>
    )
}
export default Slider;
