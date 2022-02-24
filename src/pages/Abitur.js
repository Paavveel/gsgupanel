import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import abitur1 from '../img/abitur2022/abitur-1.jpg';

import ffl1 from '../img/abitur2022/ffl/ffl1.JPG';
import ffl2 from '../img/abitur2022/ffl/ffl2.JPG';
import ffl3 from '../img/abitur2022/ffl/ffl3.JPG';
import ffl4 from '../img/abitur2022/ffl/ffl4.JPG';
import ffl5 from '../img/abitur2022/ffl/ffl5.JPG';
import ffl6 from '../img/abitur2022/ffl/ffl6.JPG';
import ffl7 from '../img/abitur2022/ffl/ffl7.JPG';
import ffl8 from '../img/abitur2022/ffl/ffl8.JPG';
import ffl9 from '../img/abitur2022/ffl/ffl9.JPG';

import fius1 from '../img/abitur2022/fius/fius1.JPG';
import fius2 from '../img/abitur2022/fius/fius2.JPG';
import fius3 from '../img/abitur2022/fius/fius3.JPG';
import fius4 from '../img/abitur2022/fius/fius4.JPG';
import fius5 from '../img/abitur2022/fius/fius5.JPG';
import fius6 from '../img/abitur2022/fius/fius6.JPG';

import fmfh1 from '../img/abitur2022/fmfh/fmfh1.JPG';
import fmfh2 from '../img/abitur2022/fmfh/fmfh2.JPG';
import fmfh3 from '../img/abitur2022/fmfh/fmfh3.JPG';
import fmfh4 from '../img/abitur2022/fmfh/fmfh4.JPG';
import fmfh5 from '../img/abitur2022/fmfh/fmfh5.JPG';
import fmfh6 from '../img/abitur2022/fmfh/fmfh6.JPG';
import fmfh7 from '../img/abitur2022/fmfh/fmfh7.JPG';
import fmfh8 from '../img/abitur2022/fmfh/fmfh8.JPG';

import pf1 from '../img/abitur2022/pf/pf1.jpg';
import pf2 from '../img/abitur2022/pf/pf2.JPG';
import pf3 from '../img/abitur2022/pf/pf3.JPG';
import pf4 from '../img/abitur2022/pf/pf4.JPG';
import pf5 from '../img/abitur2022/pf/pf5.JPG';
import pf6 from '../img/abitur2022/pf/pf6.JPG';
import pf7 from '../img/abitur2022/pf/pf7.JPG';
import pf8 from '../img/abitur2022/pf/pf8.JPG';
import pf9 from '../img/abitur2022/pf/pf9.JPG';

import spf1 from '../img/abitur2022/spf/spf1.JPG';
import spf2 from '../img/abitur2022/spf/spf2.JPG';
import spf3 from '../img/abitur2022/spf/spf3.JPG';
import spf4 from '../img/abitur2022/spf/spf4.JPG';
import spf5 from '../img/abitur2022/spf/spf5.JPG';
import spf6 from '../img/abitur2022/spf/spf6.JPG';
import spf7 from '../img/abitur2022/spf/spf7.JPG';
import spf8 from '../img/abitur2022/spf/spf8.JPG';
import spf9 from '../img/abitur2022/spf/spf9.JPG';

import tf1 from '../img/abitur2022/tf/tf1.JPG';
import tf2 from '../img/abitur2022/tf/tf2.JPG';
import tf3 from '../img/abitur2022/tf/tf3.JPG';
import tf4 from '../img/abitur2022/tf/tf4.JPG';
import tf5 from '../img/abitur2022/tf/tf5.JPG';
import tf6 from '../img/abitur2022/tf/tf6.JPG';
import tf7 from '../img/abitur2022/tf/tf7.JPG';
import tf8 from '../img/abitur2022/tf/tf8.JPG';

import ffkis1 from '../img/abitur2022/ffkis/ffkis1.JPG';
import ffkis2 from '../img/abitur2022/ffkis/ffkis2.JPG';
import ffkis3 from '../img/abitur2022/ffkis/ffkis3.JPG';
import ffkis4 from '../img/abitur2022/ffkis/ffkis4.JPG';
import ffkis5 from '../img/abitur2022/ffkis/ffkis5.JPG';
import ffkis6 from '../img/abitur2022/ffkis/ffkis6.JPG';
import ffkis7 from '../img/abitur2022/ffkis/ffkis7.JPG';

import ff1 from '../img/abitur2022/ff/ff1.JPG';
import ff2 from '../img/abitur2022/ff/ff2.JPG';
import ff3 from '../img/abitur2022/ff/ff3.JPG';
import ff4 from '../img/abitur2022/ff/ff4.JPG';
import ff5 from '../img/abitur2022/ff/ff5.JPG';
import ff6 from '../img/abitur2022/ff/ff6.JPG';
import ff7 from '../img/abitur2022/ff/ff7.JPG';
import ff8 from '../img/abitur2022/ff/ff8.JPG';

import ef1 from '../img/abitur2022/ef/ef1.JPG';
import ef2 from '../img/abitur2022/ef/ef2.JPG';
import ef3 from '../img/abitur2022/ef/ef3.JPG';
import ef4 from '../img/abitur2022/ef/ef4.JPG';
import ef5 from '../img/abitur2022/ef/ef5.JPG';
import ef6 from '../img/abitur2022/ef/ef6.JPG';
import ef7 from '../img/abitur2022/ef/ef7.JPG';
import ef8 from '../img/abitur2022/ef/ef8.JPG';

import uf1 from '../img/abitur2022/uf/uf1.JPG';
import uf2 from '../img/abitur2022/uf/uf2.JPG';
import uf3 from '../img/abitur2022/uf/uf3.JPG';
import uf4 from '../img/abitur2022/uf/uf4.JPG';
import uf5 from '../img/abitur2022/uf/uf5.JPG';
import uf6 from '../img/abitur2022/uf/uf6.JPG';
import uf7 from '../img/abitur2022/uf/uf7.JPG';
import uf8 from '../img/abitur2022/uf/uf8.JPG';

function Abitur() {
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
          <img src={abitur1} alt='abitur1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ffl1} alt='ffl1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ffl2} alt='ffl2' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ffl3} alt='ffl3' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ffl4} alt='ffl4' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ffl5} alt='ffl5' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ffl6} alt='ffl6' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ffl7} alt='ffl7' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ffl8} alt='ffl8' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ffl9} alt='ffl9' className='slide' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={fius1} alt='fius1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fius2} alt='fius2' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fius3} alt='fius3' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fius4} alt='fius4' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fius5} alt='fius5' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fius6} alt='fius6' className='slide' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={fmfh1} alt='fmfh1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fmfh2} alt='fmfh2' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fmfh3} alt='fmfh3' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fmfh4} alt='fmfh4' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fmfh5} alt='fmfh5' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fmfh6} alt='fmfh6' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fmfh7} alt='fmfh7' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fmfh8} alt='fmfh8' className='slide' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={pf1} alt='pf1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pf2} alt='pf2' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pf3} alt='pf3' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pf4} alt='pf4' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pf5} alt='pf5' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pf6} alt='pf6' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pf7} alt='pf7' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pf8} alt='pf8' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pf9} alt='pf9' className='slide' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={spf1} alt='spf1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spf2} alt='spf2' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spf3} alt='spf3' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spf4} alt='spf4' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spf5} alt='spf5' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spf6} alt='spf6' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spf7} alt='spf7' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spf8} alt='spf8' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spf9} alt='spf9' className='slide' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={tf1} alt='tf1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tf2} alt='tf2' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tf3} alt='tf3' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tf4} alt='tf4' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tf5} alt='tf5' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tf6} alt='tf6' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tf7} alt='tf7' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tf8} alt='tf8' className='slide' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={ffkis1} alt='ffkis1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ffkis2} alt='ffkis2' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ffkis3} alt='ffkis3' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ffkis4} alt='ffkis4' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ffkis5} alt='ffkis5' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ffkis6} alt='ffkis6' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ffkis7} alt='ffkis7' className='slide' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={ff1} alt='ff1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ff2} alt='ff2' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ff3} alt='ff3' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ff4} alt='ff4' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ff5} alt='ff5' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ff6} alt='ff6' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ff7} alt='ff7' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ff8} alt='ff8' className='slide' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={ef1} alt='ef1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ef2} alt='ef2' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ef3} alt='ef3' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ef4} alt='ef4' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ef5} alt='ef5' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ef6} alt='ef6' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ef7} alt='ef7' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ef8} alt='ef8' className='slide' />
        </SwiperSlide>

        <SwiperSlide>
          <img src={uf1} alt='uf1' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={uf2} alt='uf2' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={uf3} alt='uf3' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={uf4} alt='uf4' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={uf5} alt='uf5' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={uf6} alt='uf6' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={uf7} alt='uf7' className='slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={uf8} alt='uf8' className='slide' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Abitur;
