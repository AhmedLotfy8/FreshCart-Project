import React, { useEffect, useState } from 'react'
import Style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaHeart, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import Loading from '../Loading/Loading';

export default function ProductDetails() {

  const [isLoadingScreen, setIsLoadingScreen] = useState(false)
  const [productDetails, setProductsDetials] = useState([])

  const { id } = useParams()

  async function getProductDetails(id) {

    try {
      setIsLoadingScreen(true);
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      setProductsDetials(data.data)
    }

    catch (error) {
      console.log(error);
    }

    finally {
      setIsLoadingScreen(false);
    }

  }

  useEffect(() => {

    getProductDetails(id);

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
          backgroundColor: "gray",
        }}
      ></div>
    ),
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (isLoadingScreen) {
    return <>

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Loading></Loading>
      </div>
    
    </>
  }

  return (
    <>
      <div className='container max-w-6xl mx-auto grid sm:grid-cols-12 py-20 justify-center items-center gap-4'>

        <div className='col-span-4 py-5'>
          {productDetails.images &&

            <Slider {...settings}>
              {productDetails.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Product Image ${index + 1}`} />
                </div>
              ))}
            </Slider>

          }
        </div>

        <div className='col-span-8 py-5'>
          <p className='font-semibold text-2xl dark:text-white'>{productDetails.title}</p>
          <p className='py-2 dark:text-white'>{productDetails.description}</p>

          <div className='flex justify-between items-center'>
            <p className='dark:text-white'>{productDetails.price}L.E</p>
            <div className='flex justify-center items-center gap-2 p-3'>
              <FaStar className='text-orange-400'></FaStar>
              <p className='dark:text-white'>{productDetails.ratingsAverage}</p>
            </div>
          </div>

          <div className='flex justify-between items-center py-3'>
            <button type="button" className="w-11/12 focus:outline-none text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">+ Add</button>
            <FaHeart className='mb-2 text-black dark:text-white hover:text-green-600 dark:hover:text-green-500 cursor-pointer text-2xl'></FaHeart>
          </div>

        </div>

      </div>
    </>
  )
}

