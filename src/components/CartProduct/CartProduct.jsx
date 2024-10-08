import React, { useEffect, useState } from 'react'
import Style from './CartProduct.module.css'
import { FaTrash } from 'react-icons/fa'

export default function CartProduct({ CProducts, count, updateQuantity, deleteItemFunction }) {

  return (
    <>
      <div className='grid md:grid-cols-12 py-10 gap-5 border-b-2 border-gray-200'>

        <div className='col-span-2'>
          <img src={CProducts.product.imageCover} className='w-44 h-56' alt="" />
        </div>

        <div className='col-span-10 flex justify-between items-center'>
          <div>
            <h3 className='dark:text-white font-medium'>{CProducts.product.title}</h3>
            <p className='text-green-500 font-semibold py-1'>{CProducts.price} x {count} = {CProducts.price*count} L.E</p>

            <div onClick={ () => deleteItemFunction(CProducts.product.id)} className='flex items-center gap-2 cursor-pointer'>
              <FaTrash className='text-red-600'></FaTrash>
              <p className='text-red-600'>Remove</p>
            </div>

          </div>

          <div className='flex justify-center items-center'>
            <button onClick={ () => updateQuantity(CProducts.product.id , count - 1)} type="button" className="text-green-600 hover:text-white border border-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-3.5 py-1.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 text-md">
              -
            </button>
            <span className='mx-3 dark:text-white'>{CProducts.count}</span>
            <button onClick={ () =>  updateQuantity(CProducts.product.id , count + 1)} type="button" className="text-green-600 hover:text-white border border-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg px-3 py-1.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 text-md">
              +
            </button>

          </div>

        </div>

      </div>
    </>
  )
}

