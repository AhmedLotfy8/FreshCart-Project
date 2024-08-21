import React, { useEffect, useState } from 'react'
import Style from './Wishlist.module.css'
import { FaTrash } from "react-icons/fa";
import WishlistProduct from '../WishlistProduct/WishlistProduct';

export default function Wishlist() {

  return (
    <>
      <div className='py-32'>

        <div class="my-10 mx-auto max-w-6xl bg-gray-100 dark:bg-slate-800 p-10">

          <h2 className='font-semibold dark:text-white'>My wish List</h2>

          <WishlistProduct></WishlistProduct>
          <WishlistProduct></WishlistProduct>
          <WishlistProduct></WishlistProduct>
          <WishlistProduct></WishlistProduct>
        </div >

      </div >
    </>
  )
}

