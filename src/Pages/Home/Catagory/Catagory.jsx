// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Catagory.css"
 
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Catagory = () => {
  return (
    <section>
      <SectionTitle
        heading={"From 11.00 am to 10.00 pm "}
        subHeading={"Order online"}
      ></SectionTitle>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper uppercase mb-24 "
        
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-4xl ml-20    -mt-16 mb-20 text-white">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xl ml-20   -mt-16 mb-20 text-white">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xl ml-20    -mt-16 mb-20 text-white">Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xl ml-20  -mt-16 mb-20 text-white">Deserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-4xl ml-20    -mt-16 mb-20 text-white">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-4xl ml-20   -mt-16 mb-20 text-white">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-4xl ml-20    -mt-16 mb-20 text-white">Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-4xl ml-20  -mt-16 mb-20 text-white">Deserts</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Catagory;
