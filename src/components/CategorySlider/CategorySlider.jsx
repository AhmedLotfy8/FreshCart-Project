import React, { useEffect, useState } from 'react'
import Style from './CategorySlider.module.css'
import axios from 'axios';
import Slider from "react-slick";


export default function CategorySlider() {

  const [isLoadingScreen, setIsLoadingScreen] = useState(false)
  const [categories, setCategories] = useState([])

  async function getCategories() {

    try {
      setIsLoadingScreen(true);
      const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      setCategories(data.data)
    }

    catch (error) {
      console.log(error);
    }

    finally {
      setIsLoadingScreen(false);
    }

  }

  useEffect(() => {

    getCategories();

  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    arrows: false,
    customPaging: (i) => (
      <div
        style={{
          marginTop: "20px",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "gray" ,
        }}
      ></div>
    ),
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  if (isLoadingScreen) {
    return <>
    </>
  }

  return (
    <>
      <Slider {...settings} className='w-11/12 mx-auto pt-5'>
        {
          categories.map((c) => <div className=''>
            <img src={c.image} className='h-72 w-full object-cover ' alt="" />
            <h3 className='text-center font-semibold dark:text-white'>{c.name}</h3>
          </div>)
        }
      </Slider>
    </>
  )
}

