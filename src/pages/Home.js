import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import mainymy1 from '../img/main-ymy1.jpg';
import mainymy2 from '../img/main-ymy2.jpg';
import mainymy3 from '../img/main-ymy3.jpg';
import mainymy4 from '../img/main-ymy4.jpg';
import mainymy5 from '../img/main-ymy5.jpg';
import mainymy6 from '../img/main-ymy6.jpg';

function Home() {
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
          <img src={mainymy1} alt='mainymy1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainymy2} alt='mainymy2' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainymy3} alt='mainymy3' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainymy4} alt='mainymy4' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainymy5} alt='mainymy5' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mainymy6} alt='mainymy6' className='slide' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
