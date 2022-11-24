import React from 'react';
// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import main7 from '../img/home/1.jpg';
import main16 from '../img/home/10.jpg';
import main17 from '../img/home/11.jpg';
import main18 from '../img/home/12.jpg';
import main19 from '../img/home/13.jpg';
import main8 from '../img/home/2.jpg';
import main9 from '../img/home/3.jpg';
import main10 from '../img/home/4.jpg';
import main11 from '../img/home/5.jpg';
import main12 from '../img/home/6.jpg';
import main13 from '../img/home/7.jpg';
import main14 from '../img/home/8.jpg';
import main15 from '../img/home/9.jpg';
import main1 from '../img/home/main-ymy1.jpg';
import main2 from '../img/home/main-ymy2.jpg';
import main3 from '../img/home/main-ymy3.jpg';
import main4 from '../img/home/main-ymy4.jpg';
import main5 from '../img/home/main-ymy5.jpg';
import main6 from '../img/home/main-ymy6.jpg';

const images = [
  main1,
  main2,
  main3,
  main4,
  main5,
  main6,
  main7,
  main8,
  main9,
  main10,
  main11,
  main12,
  main13,
  main14,
  main15,
  main16,
  main17,
  main18,
  main19,
];

export function Home() {
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
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`main${i + 1}`} className='slide' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
