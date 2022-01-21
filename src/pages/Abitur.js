import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import abitur1 from '../img/abitur-1.jpg';

function Abitur() {
  return (
    <div className='main-page'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, A11y]}
        // loop={true}
        slidesPerView={1}
        // speed={1000}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        // spaceBetween={30}
        // navigation={true}
        // pagination={{
        //   type: 'fraction',
        // }}
      >
        <SwiperSlide>
          <img src={abitur1} alt='abitur1' className='slide' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Abitur;