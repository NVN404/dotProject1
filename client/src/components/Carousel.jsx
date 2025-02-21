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
      interval={3000}
      transitionTime={3000}
      swipeScrollTolerance={5}
      className='mb-[7em] mt-[2em] h-[45vh] w-[100%] md:h-[85vh] lg:mt-[1em] lg:p-[4em] pt-[2em]'
    >
      <div>
        <img src='/gal1.jpg' alt='Image 1' className='h-[45vh] md:h-[85vh] w-[60%]  ' />
        <p>Institution Achievement etc</p>
      </div>
      <div>
        <img src='/gal2.jpg' alt='Image 2' className='h-[45vh] md:h-[85vh] w-[60%]  '/>
        <p>Institution Achievement etc</p>
      </div>
      <div>
        <img src='/gal3.jpg' alt='Image 3' className='h-[45vh] md:h-[85vh] w-[60%]  '/>
        <p>Institution Achievement etc</p>
      </div>
    </Carousel>
  );
};

export default MainCarousel;
