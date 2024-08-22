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

      <div className='py-32'>
        <RecentProducts></RecentProducts>
      </div>

    </>
  )
}