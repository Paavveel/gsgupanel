import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import tech1 from '../img/tech-1.jpg';
import tech2 from '../img/tech-2.jpg';
import tech3 from '../img/tech-3.jpg';

function Tech() {
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
          disableOnInteraction: true,
        }}
        spaceBetween={30}
        navigation={true}
        pagination={{
          type: 'fraction',
        }}
      >
        <SwiperSlide>
          <img src={tech1} alt='tech1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tech2} alt='tech2' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tech3} alt='tech3' className='slide' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Tech;
