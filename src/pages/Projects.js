import React from "react";
// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import proj1 from "../img/projects/1.jpg";
import proj2 from "../img/projects/2.jpg";
import proj3 from "../img/projects/3.jpg";
import proj4 from "../img/projects/4.jpg";
import proj5 from "../img/projects/5.jpg";
import proj6 from "../img/projects/6.jpg";
import proj7 from "../img/projects/7.jpg";
import proj8 from "../img/projects/8.jpg";
import proj9 from "../img/projects/9.jpg";
import proj10 from "../img/projects/10.jpg";
import proj11 from "../img/projects/11.jpg";
import proj12 from "../img/projects/12.jpg";
import proj13 from "../img/projects/13.jpg";
import proj14 from "../img/projects/14.jpg";
import proj15 from "../img/projects/15.jpg";
import proj16 from "../img/projects/16.jpg";
import proj17 from "../img/projects/17.jpg";
import proj18 from "../img/projects/18.jpg";
import proj19 from "../img/projects/19.jpg";
import proj20 from "../img/projects/20.jpg";
import proj21 from "../img/projects/21.jpg";
import proj22 from "../img/projects/22.jpg";
import proj23 from "../img/projects/23.jpg";
import proj24 from "../img/projects/24.jpg";
import proj25 from "../img/projects/25.jpg";
import proj26 from "../img/projects/26.jpg";
import proj27 from "../img/projects/27.jpg";
import proj28 from "../img/projects/28.jpg";
import proj29 from "../img/projects/29.jpg";
import proj30 from "../img/projects/30.jpg";
import proj31 from "../img/projects/31.jpg";
import proj32 from "../img/projects/32.jpg";
import proj33 from "../img/projects/33.jpg";
import proj34 from "../img/projects/34.jpg";
import proj35 from "../img/projects/35.jpg";

const images = [
  proj1,
  proj2,
  proj3,
  proj4,
  proj5,
  proj6,
  proj7,
  proj8,
  proj9,
  proj10,
  proj11,
  proj12,
  proj13,
  proj14,
  proj15,
  proj16,
  proj17,
  proj18,
  proj19,
  proj20,
  proj21,
  proj22,
  proj23,
  proj24,
  proj25,
  proj26,
  proj27,
  proj28,
  proj29,
  proj30,
  proj31,
  proj32,
  proj33,
  proj34,
  proj35,
];

export function Projects() {
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
          disableOnInteraction: true,
        }}
        spaceBetween={30}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt={`project${i + 1}`} className="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
