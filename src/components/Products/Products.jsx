import React, { useEffect, useState } from 'react'
import Style from './Products.module.css'
import axios from 'axios'
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import RecentProducts from '../RecentProducts/RecentProducts';


export default function Products() {

  const [products, setProducts] = useState([])

  async function getProducts() {

    try {
      const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
      setProducts(data.data)

      console.log(data.data);

    }

    catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {

    getProducts();

  }, [])

  return (
    <>

      <RecentProducts></RecentProducts>

      {/* <div className='py-32'>


        <div className='mb-5'>

          <div class="mt-5 mb-10 mx-auto max-w-4xl">
            <input type="text" id="productNameProducts" placeholder='Search'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            />

          </div>

          <div className='container max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10'>

            {products.length == 0 ? <div className='text-red-600'>Loading</div> :

              products.map(function (p) {

                return <>

                  <Link to={'/productdetails/id:'}>

                    <div className={`${Style.product} p-3 rounded-lg cursor-pointer`}>
                      <img src={p.imageCover} className='' alt="" />

                      <div className='px-1'>
                        <h3 className='text-green-600 dark:text-green-500 text-sm font-normal'>{p.category.name.split(' ').slice(0, 2).join(' ')}</h3>
                        <p className='line-clamp-3 dark:text-white font-semibold py-3'>{p.title.split(' ').slice(0, 3).join(' ')}</p>
                        <div className='flex justify-between items-center'>
                          <p className='dark:text-white'>{p.price} L.E</p>

                          <div className='flex justify-center items-center gap-2 p-3'>
                            <FaStar className='text-orange-400'></FaStar>
                            <p className='dark:text-white'>{p.ratingsAverage}</p>
                          </div>

                        </div>

                        <div className='flex justify-end items-center pe-4'>
                          <FaHeart className='text-black dark:text-white hover:text-green-600 dark:hover:text-green-500 cursor-pointer text-2xl'></FaHeart>
                        </div>

                      </div>

                    </div>

                  </Link>

                </>

              })

            }

          </div >

        </div>
      </div> */}


    </>
  )
}










