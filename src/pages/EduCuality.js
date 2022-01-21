import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import educuality1 from '../img/educuality-1.jpg';
import educuality2 from '../img/educuality-2.jpg';
import educuality3 from '../img/educuality-3.jpg';
import educuality4 from '../img/educuality-4.jpg';

function EduCuality() {
  return (
    <div className='main-page'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, A11y]}
        loop={true}
        slidesPerView={1}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        navigation={true}
        pagination={{
          type: 'fraction',
        }}
      >
        <SwiperSlide>
          <img src={educuality1} alt='educuality1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={educuality2} alt='educuality2' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={educuality3} alt='educuality3' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={educuality4} alt='educuality4' className='slide' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default EduCuality;
