import React from "react";
// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

import main1 from "../img/home/1.jpeg";
import main2 from "../img/home/2.jpeg";
import main3 from "../img/home/3.jpeg";
import main4 from "../img/home/4.jpeg";
import main5 from "../img/home/5.jpeg";
import main6 from "../img/home/6.jpeg";
import main7 from "../img/home/7.jpeg";
import main8 from "../img/home/8.jpeg";
import main9 from "../img/home/9.jpeg";
import main10 from "../img/home/10.jpeg";
import main11 from "../img/home/11.jpeg";
import main12 from "../img/home/12.jpeg";
import main13 from "../img/home/13.jpeg";
import main14 from "../img/home/14.jpeg";
import main15 from "../img/home/15.jpeg";
import main16 from "../img/home/16.jpeg";
import main17 from "../img/home/17.jpeg";
import main18 from "../img/home/18.jpeg";
import main19 from "../img/home/19.jpeg";
import main20 from "../img/home/20.jpeg";
import main21 from "../img/home/21.jpeg";
import main22 from "../img/home/22.jpeg";
import main23 from "../img/home/23.jpeg";
import main24 from "../img/home/24.jpeg";
import main25 from "../img/home/25.jpeg";
import main26 from "../img/home/26.jpeg";
import main27 from "../img/home/27.jpeg";
import main28 from "../img/home/28.jpeg";
import main29 from "../img/home/29.jpeg";
import main30 from "../img/home/30.jpeg";
import main31 from "../img/home/31.jpeg";
import main32 from "../img/home/32.jpeg";
import main33 from "../img/home/33.jpeg";
import main34 from "../img/home/34.jpeg";
import main35 from "../img/home/35.jpeg";
import main36 from "../img/home/36.jpeg";
import main37 from "../img/home/37.jpeg";
import main38 from "../img/home/38.jpeg";
import main39 from "../img/home/39.jpeg";
import main40 from "../img/home/40.jpeg";
import main41 from "../img/home/41.jpeg";
import main42 from "../img/home/42.jpeg";
import main43 from "../img/home/43.jpeg";
import main44 from "../img/home/44.jpeg";
import main45 from "../img/home/45.jpeg";
import main46 from "../img/home/46.jpeg";
import main47 from "../img/home/47.jpeg";
import main48 from "../img/home/48.jpeg";
import main49 from "../img/home/49.jpeg";
import main50 from "../img/home/50.jpeg";
import main51 from "../img/home/50.jpeg";

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
  main20,
  main21,
  main22,
  main23,
  main24,
  main25,
  main26,
  main27,
  main28,
  main29,
  main30,
  main31,
  main32,
  main33,
  main34,
  main35,
  main36,
  main37,
  main38,
  main39,
  main40,
  main41,
  main42,
  main43,
  main44,
  main45,
  main46,
  main47,
  main48,
  main49,
  main50,
  main51
];

export function Home() {
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
            <img src={img} alt={`main${i + 1}`} className="slide" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
