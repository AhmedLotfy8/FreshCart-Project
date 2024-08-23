import React, { useEffect, useState } from 'react'
import Style from './Cart.module.css'
import CartProduct from '../CartProduct/CartProduct'

export default function Cart() {

  return (
    <>
      <div className='py-32'>

        <div class="my-10 mx-auto max-w-6xl bg-gray-100 dark:bg-slate-800 p-10">

          {/* Empty cart */}
          {/* <div> 
            <h2 className='font-semibold dark:text-white pb-6'>Cart Shop</h2>
            <h2 className='font-semibold dark:text-white'>Your cart is empty</h2>
          </div> */}

          <div>
            <div>
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold dark:text-white pb-6'>Cart Shop</h2>
                <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Checkout</button>
              </div>

              <div className='flex justify-between items-center font-semibold text-lg py-1'>
                <p className='dark:text-white'>Total price: <span className='text-green-500'>648</span></p>
                <p className='dark:text-white'>total number of items: <span className='text-green-500'>2</span></p>
              </div>
            </div>

            <CartProduct></CartProduct>
            <CartProduct></CartProduct>
            <CartProduct></CartProduct>

          </div>

          <div className='text-center mt-5'>
            <button type="button" className="text-red-600 hover:text-white border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Clear Your Cart</button>
          </div>

        </div >

      </div >
    </>
  )
}

