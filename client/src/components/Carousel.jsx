import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// Carousel Component without knobs
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
            dynamicHeight={true}
            emulateTouch={true}
            autoFocus={false}
            thumbWidth={100}
            selectedItem={0}
            interval={1500}
            transitionTime={500}
            swipeScrollTolerance={5}
            className='p-[2em]'
          >
            <div>
              <img src='/image.png' alt='Image 1' className='h-[50dvh] object-contain' />
              <p>Instituition Achievement etc</p>
            </div>
            <div>
              <img src='/image2.jpg' alt='Image 2' className='h-[50dvh] object-contain'/>
              <p>Instituition Achievement etc</p>

            </div>
            <div>
              <img src='/image3.jpg' alt='Image 3' className='h-[50dvh] object-contain'/>
              <p>Instituition Achievement etc</p>

            </div>
          </Carousel>
  );
};

export default MainCarousel;
