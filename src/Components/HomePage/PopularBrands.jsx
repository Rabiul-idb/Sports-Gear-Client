import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

import brand1 from "../../assets/images/1.png";
import brand2 from "../../assets/images/2.png";
import brand3 from "../../assets/images/3.png";
import brand4 from "../../assets/images/4.png";
import brand5 from "../../assets/images/5.png";

const PopularBrands = () => {
  return (
    <div className="w-11/12 mx-auto mb-12">

        <h2 className="lg:text-4xl md:text-3xl text-2xl text-center my-5 font-semibold">Popular Brands</h2>

      <Swiper
        Autoplay={true}
        loop={true}
        slidesPerView={6}
        spaceBetween={10}

        modules={[Autoplay]}
        className="brands items-center"
      >
        <SwiperSlide className="">
          <img src={brand1} className="" alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={brand2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={brand3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={brand4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={brand5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={brand1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={brand2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={brand3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularBrands;
