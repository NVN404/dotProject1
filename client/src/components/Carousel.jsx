import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const MainCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      infiniteLoop={true}
      autoPlay={true}
      stopOnHover={false}
      swipeable={true}
      dynamicHeight={false}
      emulateTouch={true}
      autoFocus={false}
      thumbWidth={100}
      selectedItem={0}
      interval={2500}
      transitionTime={1000}
      swipeScrollTolerance={5}
      className='mt-[2em] mb-[3em] h-[85vh]'
    >
      <div>
        <img src='/image.png' alt='Image 1' className='h-[85vh] w-[60%] mx-auto ' />
        <p>Institution Achievement etc</p>
      </div>
      <div>
        <img src='/image2.jpg' alt='Image 2' className='h-[85vh] w-[60%] mx-auto '/>
        <p>Institution Achievement etc</p>
      </div>
      <div>
        <img src='/image3.jpg' alt='Image 3' className='h-[85vh] w-[60%] mx-auto '/>
        <p>Institution Achievement etc</p>
      </div>
    </Carousel>
  );
};

export default MainCarousel;
