import React from "react";
// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import ab1 from "../img/abitur/ab1.jpg";
// import ab2 from "../img/abitur/ab2.jpg";

import ffl1 from "../img/abitur/ffl/1.JPG";
import ffl2 from "../img/abitur/ffl/2.JPG";
import ffl3 from "../img/abitur/ffl/3.JPG";
import ffl4 from "../img/abitur/ffl/4.JPG";
import ffl5 from "../img/abitur/ffl/5.JPG";
import ffl6 from "../img/abitur/ffl/6.JPG";
import ffl7 from "../img/abitur/ffl/7.JPG";
import ffl8 from "../img/abitur/ffl/8.JPG";
import ffl9 from "../img/abitur/ffl/9.JPG";
import ffl10 from "../img/abitur/ffl/10.JPG";
import ffl11 from "../img/abitur/ffl/11.JPG";
import ffl12 from "../img/abitur/ffl/12.JPG";
import ffl13 from "../img/abitur/ffl/13.JPG";
import ffl14 from "../img/abitur/ffl/14.JPG";
import ffl15 from "../img/abitur/ffl/15.JPG";
import ffl16 from "../img/abitur/ffl/16.JPG";
import ffl17 from "../img/abitur/ffl/17.JPG";
import ffl18 from "../img/abitur/ffl/18.JPG";
import ffl19 from "../img/abitur/ffl/19.JPG";
import ffl20 from "../img/abitur/ffl/20.JPG";

import fius1 from "../img/abitur/fius/1.JPG";
import fius2 from "../img/abitur/fius/2.JPG";
import fius3 from "../img/abitur/fius/3.JPG";
import fius4 from "../img/abitur/fius/4.JPG";
import fius5 from "../img/abitur/fius/5.JPG";
import fius6 from "../img/abitur/fius/6.JPG";
import fius7 from "../img/abitur/fius/7.JPG";
import fius8 from "../img/abitur/fius/8.JPG";
import fius9 from "../img/abitur/fius/9.JPG";
import fius10 from "../img/abitur/fius/10.JPG";
import fius11 from "../img/abitur/fius/11.JPG";
import fius12 from "../img/abitur/fius/12.JPG";
import fius13 from "../img/abitur/fius/13.JPG";
import fius14 from "../img/abitur/fius/14.JPG";
import fius15 from "../img/abitur/fius/15.JPG";
import fius16 from "../img/abitur/fius/16.JPG";
import fius17 from "../img/abitur/fius/17.JPG";

import fmfh1 from "../img/abitur/fmfh/1.JPG";
import fmfh2 from "../img/abitur/fmfh/2.JPG";
import fmfh3 from "../img/abitur/fmfh/3.JPG";
import fmfh4 from "../img/abitur/fmfh/4.JPG";
import fmfh5 from "../img/abitur/fmfh/5.JPG";
import fmfh6 from "../img/abitur/fmfh/6.JPG";
import fmfh7 from "../img/abitur/fmfh/7.JPG";
import fmfh8 from "../img/abitur/fmfh/8.JPG";
import fmfh9 from "../img/abitur/fmfh/9.JPG";
import fmfh10 from "../img/abitur/fmfh/10.JPG";
import fmfh11 from "../img/abitur/fmfh/11.JPG";
import fmfh12 from "../img/abitur/fmfh/12.JPG";
import fmfh13 from "../img/abitur/fmfh/13.JPG";
import fmfh14 from "../img/abitur/fmfh/14.JPG";
import fmfh15 from "../img/abitur/fmfh/15.JPG";
import fmfh16 from "../img/abitur/fmfh/16.JPG";

import pf1 from "../img/abitur/pf/1.JPG";
import pf2 from "../img/abitur/pf/2.JPG";
import pf3 from "../img/abitur/pf/3.JPG";
import pf4 from "../img/abitur/pf/4.JPG";
import pf5 from "../img/abitur/pf/5.JPG";
import pf6 from "../img/abitur/pf/6.JPG";
import pf7 from "../img/abitur/pf/7.JPG";
import pf8 from "../img/abitur/pf/8.JPG";
import pf9 from "../img/abitur/pf/9.JPG";
import pf10 from "../img/abitur/pf/10.JPG";
import pf11 from "../img/abitur/pf/11.JPG";
import pf12 from "../img/abitur/pf/12.JPG";

import spf1 from "../img/abitur/spf/1.JPG";
import spf2 from "../img/abitur/spf/2.JPG";
import spf3 from "../img/abitur/spf/3.JPG";
import spf4 from "../img/abitur/spf/4.JPG";
import spf5 from "../img/abitur/spf/5.JPG";
import spf6 from "../img/abitur/spf/6.JPG";
import spf7 from "../img/abitur/spf/7.JPG";
import spf8 from "../img/abitur/spf/8.JPG";
import spf9 from "../img/abitur/spf/9.JPG";

import tf1 from "../img/abitur/tf/1.JPG";
import tf2 from "../img/abitur/tf/2.JPG";
import tf3 from "../img/abitur/tf/3.JPG";
import tf4 from "../img/abitur/tf/4.JPG";
import tf5 from "../img/abitur/tf/5.JPG";
import tf6 from "../img/abitur/tf/6.JPG";
import tf7 from "../img/abitur/tf/7.JPG";
import tf8 from "../img/abitur/tf/8.JPG";
import tf9 from "../img/abitur/tf/9.JPG";
import tf10 from "../img/abitur/tf/10.JPG";
import tf11 from "../img/abitur/tf/11.JPG";

import ffkis1 from "../img/abitur/ffkis/1.JPG";
import ffkis2 from "../img/abitur/ffkis/2.JPG";
import ffkis3 from "../img/abitur/ffkis/3.JPG";
import ffkis4 from "../img/abitur/ffkis/4.JPG";
import ffkis5 from "../img/abitur/ffkis/5.JPG";
import ffkis6 from "../img/abitur/ffkis/6.JPG";
import ffkis7 from "../img/abitur/ffkis/7.JPG";
import ffkis8 from "../img/abitur/ffkis/8.JPG";
import ffkis9 from "../img/abitur/ffkis/9.JPG";
import ffkis10 from "../img/abitur/ffkis/10.JPG";

import ff1 from "../img/abitur/ff/1.JPG";
import ff2 from "../img/abitur/ff/2.JPG";
import ff3 from "../img/abitur/ff/3.JPG";
import ff4 from "../img/abitur/ff/4.JPG";
import ff5 from "../img/abitur/ff/5.JPG";
import ff6 from "../img/abitur/ff/6.JPG";
import ff7 from "../img/abitur/ff/7.JPG";
import ff8 from "../img/abitur/ff/8.JPG";
import ff9 from "../img/abitur/ff/9.JPG";

import ef1 from "../img/abitur/ef/1.JPG";
import ef2 from "../img/abitur/ef/2.JPG";
import ef3 from "../img/abitur/ef/3.JPG";
import ef4 from "../img/abitur/ef/4.JPG";
import ef5 from "../img/abitur/ef/5.JPG";
import ef6 from "../img/abitur/ef/6.JPG";
import ef7 from "../img/abitur/ef/7.JPG";

import uf1 from "../img/abitur/uf/1.JPG";
import uf2 from "../img/abitur/uf/2.JPG";
import uf3 from "../img/abitur/uf/3.JPG";
import uf4 from "../img/abitur/uf/4.JPG";
import uf5 from "../img/abitur/uf/5.JPG";
import uf6 from "../img/abitur/uf/6.JPG";
import uf7 from "../img/abitur/uf/7.JPG";
import uf8 from "../img/abitur/uf/8.JPG";
import uf9 from "../img/abitur/uf/9.JPG";
import uf10 from "../img/abitur/uf/10.JPG";
import uf11 from "../img/abitur/uf/11.JPG";
import uf12 from "../img/abitur/uf/12.JPG";
import uf13 from "../img/abitur/uf/13.JPG";

const images = [
  // ab1,
  // ab2,
  ffl1,
  ffl2,
  ffl3,
  ffl4,
  ffl5,
  ffl6,
  ffl7,
  ffl8,
  ffl9,
  ffl10,
  ffl11,
  ffl12,
  ffl13,
  ffl14,
  ffl15,
  ffl16,
  ffl17,
  ffl18,
  ffl19,
  ffl20,


  fius1,
  fius2,
  fius3,
  fius4,
  fius5,
  fius6,
  fius7,
  fius8,
  fius9,
  fius10,
  fius11,
  fius12,
  fius13,
  fius14,
  fius15,
  fius16,
  fius17,


  fmfh1,
  fmfh2,
  fmfh3,
  fmfh4,
  fmfh5,
  fmfh6,
  fmfh7,
  fmfh8,
  fmfh9,
  fmfh10,
  fmfh11,
  fmfh12,
  fmfh13,
  fmfh14,
  fmfh15,
  fmfh16,



  pf1,
  pf2,
  pf3,
  pf4,
  pf5,
  pf6,
  pf7,
  pf8,
  pf9,
  pf10,
  pf11,
  pf12,

  spf1,
  spf2,
  spf3,
  spf4,
  spf5,
  spf6,
  spf7,
  spf8,
  spf9,



  tf1,
  tf2,
  tf3,
  tf4,
  tf5,
  tf6,
  tf7,
  tf8,
  tf9,
  tf10,
  tf11,


  ffkis1,
  ffkis2,
  ffkis3,
  ffkis4,
  ffkis5,
  ffkis6,
  ffkis7,
  ffkis8,
  ffkis9,
  ffkis10,

  ff1,
  ff2,
  ff3,
  ff4,
  ff5,
  ff6,
  ff7,
  ff8,
  ff9,
  ef1,
  ef2,
  ef3,
  ef4,
  ef5,
  ef6,
  ef7,

  uf1,
  uf2,
  uf3,
  uf4,
  uf5,
  uf6,
  uf7,
  uf8,
  uf9,
  uf10,
  uf11,
  uf12,
  uf13,
];

export function Abitur() {
  return (
    <div className="main-page">
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
          type: "fraction",
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`abitur${i + 1}`} className="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <h5>в разработке...</h5> */}
    </div>
  );
}
