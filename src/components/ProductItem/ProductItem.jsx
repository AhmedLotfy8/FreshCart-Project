import React, { useEffect, useState, useContext } from 'react'
import Style from './ProductItem.module.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaStar } from 'react-icons/fa'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast'
import { WishlistContext } from '../../Context/WishlistContext'

export default function ProductItem({ products }) {

  const { addItemToCart } = useContext(CartContext);
  const { addItemToWishlist } = useContext(WishlistContext);

  async function addItem(id) {
    const response = await addItemToCart(id)

    if (response.data.status == "success") {

      toast.success('Added', {
        position: "top-right",
      })

    }

  }

  async function addItemWishlist(id) {
    const response = await addItemToWishlist(id)

    if (response.data.status == "success") {

      toast.success('Liked', {
        position: "top-right",
      })

    }

  }

  return (

    <div className={`${Style.product} py-2 px-3 rounded-lg`}>
      <Link to={`/productdetails/${products._id}`}>

        <>

          <img src={products.imageCover} alt="" />

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

          </div>

        </>
      </Link>

      <div className={` ${Style.floatButton} flex justify-between items-center`}>

        <button onClick={() => addItem(products._id)} className={` bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-white px-8 py-2 rounded-lg cursor-pointer`}>Add +</button>

        <div onClick={() => addItemWishlist(products._id)} className='flex justify-end items-center pe-4'>
          <FaHeart className='text-black dark:text-white hover:text-green-600 dark:hover:text-green-500 text-2xl cursor-pointer'></FaHeart>
        </div>

      </div>

    </div >
  )
}

