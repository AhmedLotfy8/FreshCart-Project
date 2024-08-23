import React, { useEffect, useState } from 'react'
import Style from './MainSlider.module.css'

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import Slider from 'react-slick';

export default function MainSlider() {

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    dots: true,
    arrows: false,

    customPaging: (i) => (
      <div
        style={{
          marginTop: "20px",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "gray",
        }}
      ></div>
    ),
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className='container max-w-xl mx-auto py-10'>

        <div className='grid md:grid-cols-12'>

          <div className='md:col-span-6'>
            <Slider {...settings}>
              <img src={img1} className='h-[400px] w-full object-cover' alt="" />
              <img src={img2} className='h-[400px] w-full object-cover' alt="" />
              <img src={img3} className='h-[400px] w-full object-cover' alt="" />
            </Slider>

          </div>

          <div className='md:col-span-6'>
            <img src={img4} className='h-[200px] w-full object-cover' alt="" />
            <img src={img5} className='h-[200px] w-full object-cover' alt="" />
          </div>

        </div>

      </div>

    </>
  )
}

