import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import info1 from '../img/info-1.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function Info() {
  return (
    <div className='main-page'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, A11y]}
        // loop={true}
        // slidesPerView={1}
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
          <img src={info1} alt='info1' className='slide' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Info;
