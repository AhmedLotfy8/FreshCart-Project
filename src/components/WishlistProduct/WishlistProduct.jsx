import React, { useEffect, useState } from 'react'
import Style from './WishlistProduct.module.css'
import { FaTrash } from 'react-icons/fa'

export default function WishlistProduct() {

  return (
    <>
      <div className='grid md:grid-cols-12 py-10 gap-5 border-b-2 border-gray-200'>

        <div className='col-span-2'>
          <img src="../../../public/img.jpg" className='w-44 h-56' alt="" />
        </div>

        <div className='col-span-10 flex justify-between items-center'>
          <div>
            <h3 className='dark:text-white font-medium'>Woman Shawl</h3>
            <p className='text-green-500 font-semibold py-1'>149 EGP</p>

            <div className='flex items-center gap-2'>
              <FaTrash className='text-red-600'></FaTrash>
              <p className='text-red-600'>Remove</p>
            </div>

          </div>

          <div>
            <button type="button" className="text-green-600 hover:text-white border border-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 text-md">Add to cart</button>
          </div>

        </div>

      </div>
    </>
  )
}

