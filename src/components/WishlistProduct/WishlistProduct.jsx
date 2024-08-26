import React, { useContext, useEffect, useState } from 'react'
import Style from './WishlistProduct.module.css'
import { FaTrash } from 'react-icons/fa'
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';

export default function WishlistProduct({ WProducts, deleteItemFunction }) {

  const { addItemToCart } = useContext(CartContext);

  async function addItem(id) {
    const response = await addItemToCart(id)    

    if (response.data.status == "success") {

      toast.success('Added', {
        position: "top-right",
      })

    }

  }

  return (
    <>
      <div className='grid md:grid-cols-12 py-10 gap-5 border-b-2 border-gray-200'>

        <div className='col-span-2'>
          <img src={WProducts.imageCover} className='w-44 h-56' alt="" />
        </div>

        <div className='col-span-10 flex justify-between items-center'>
          <div>
            <h3 className='dark:text-white font-medium'>{WProducts.title}</h3>
            <p className='text-green-500 font-semibold py-1'>{WProducts.price} L.E</p>

            <div onClick={() => deleteItemFunction(WProducts._id)} className='flex items-center gap-2 cursor-pointer'>
              <FaTrash className='text-red-600'></FaTrash>
              <p className='text-red-600'>Remove</p>
            </div>

          </div>

          <div>
            <button onClick={() => addItem(WProducts._id)} type="button" className="text-green-600 hover:text-white border border-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 text-md">Add to cart</button>
          </div>

        </div>

      </div>
    </>
  )
}

