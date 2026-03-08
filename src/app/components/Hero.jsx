"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import img from "../../../public/img/weed1.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Navbar from './Navbar';


export default function Hero() {
  return (
    <div className='mt-6'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-11/12 mx-auto rounded-[60px] h-[100vh]"
      >
        <Navbar className=""></Navbar>
        <SwiperSlide><img src="https://stefans.studio/wp-content/uploads/9-close-up-brautpaar.webp" alt="slide" /></SwiperSlide>
        <SwiperSlide><img src="https://stefans.studio/wp-content/uploads/1-hochzeitspaar-vor-schloss.jpg" alt="slide" /></SwiperSlide>
        <SwiperSlide><img src="https://stefans.studio/wp-content/uploads/10-freude-nach-der-trauung.webp" alt="slide" /></SwiperSlide>
        <SwiperSlide><img src="https://stefans.studio/wp-content/uploads/12-hochzeitspaar-im-ford-mustang.webp" alt="slide" /></SwiperSlide>
        <SwiperSlide><img src="https://stefans.studio/wp-content/uploads/2-after-wedding-paarshooting.jpg" alt="slide" /></SwiperSlide>
        <SwiperSlide><img src="https://stefans.studio/wp-content/uploads/2-after-wedding-paarshooting.jpg" alt="slide" /></SwiperSlide>
        {/* <SwiperSlide><img src="/img/weed1.jpg" alt="slide" /></SwiperSlide> */}
      </Swiper>
    </div>
  )
}
