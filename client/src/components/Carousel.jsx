import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Carousel Component without knobs
const ComponentCar = () => {
  return (
    <Carousel
      showArrows={true}
      showStatus={true}
      showIndicators={true}
      infiniteLoop={true}
      showThumbs={true}
      useKeyboardArrows={true}
      autoPlay={true}
      stopOnHover={true}
      swipeable={true}
      dynamicHeight={true}
      emulateTouch={true}
      autoFocus={false}
      thumbWidth={100}
      selectedItem={0}
      interval={2000}
      transitionTime={500}
      swipeScrollTolerance={5}
    >
      <div>
        <img src='/image.png' alt='Image 1' />
        <p className='legend'>Image 1</p>
      </div>
      <div>
        <img src='/image2.jpg' alt='Image 2' />
        <p className='legend'>Image 2</p>
      </div>
      <div>
        <img src='/image3.jpg' alt='Image 3' />
        <p className='legend'>Image 3</p>
      </div>
    </Carousel>
  );
};

export default ComponentCar;
