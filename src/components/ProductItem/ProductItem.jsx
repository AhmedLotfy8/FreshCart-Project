import React, { useEffect, useState, useContext } from 'react'
import Style from './ProductItem.module.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaStar } from 'react-icons/fa'
import { CartContext } from '../../Context/CartContext'

export default function ProductItem({ products }) {

  const { addItemToCart } = useContext(CartContext);

  async function addItem(id) {
    const response = await addItemToCart(id)
    
    if (response.data.status == "success") {
      alert('hey')
    }

  }

  return (
    <div>
      <Link to={`/productdetails/${products._id}`}>
        <div className={`${Style.product} p-3 rounded-lg`}>
          <img src={products.imageCover} className='' alt="" />

          <div className='px-1'>
            <h3 className='text-green-600 dark:text-green-500 text-sm font-normal text-left'>{products.category.name.split(' ').slice(0, 2).join(' ')}</h3>
            <p className='line-clamp-3 dark:text-white font-semibold py-3 '>{products.title.split(' ').slice(0, 3).join(' ')}</p>

            <div className='flex justify-between items-center'>
              <p className='dark:text-white'>{products.price} L.E</p>

              <div className='flex justify-center items-center gap-2 p-3'>
                <FaStar className='text-orange-400'></FaStar>
                <p className='dark:text-white'>{products.ratingsAverage}</p>
              </div>

            </div>

            <div className='flex justify-end items-center pe-4'>
              <FaHeart className='text-black dark:text-white hover:text-green-600 dark:hover:text-green-500 text-2xl cursor-pointer'></FaHeart>
            </div>

          </div>



        </div>
      </Link>

      {/* <div onClick={hi()} className={`${Style.floatButton} relative bottom-0 left-0 right-0 mb-4 flex justify-center transition-transform duration-300 ease-in-out`}> */}
      <button onClick={() => addItem(products._id)} className="bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-white px-8 py-2 rounded-lg cursor-pointer">Add +</button>
      {/* </div> */}

    </div>
  )
}

