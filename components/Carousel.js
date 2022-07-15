import React, { useRef, useState } from "react";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel({ img_dir, images }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {images &&
        images.split("|").map((img_url) => (
          <SwiperSlide>
            <img src={`${img_dir}/${img_url}`} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
