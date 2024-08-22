import React, { useEffect, useState } from 'react'
import Style from './RecentProducts.module.css'
import axios from 'axios'
import ProductItem from '../ProductItem/ProductItem';
import Loading from '../Loading/Loading';

export default function RecentProducts() {

  const [isLoadingScreen, setIsLoadingScreen] = useState(false)
  const [products, setProducts] = useState([])

  async function getProducts() {

    try {
      setIsLoadingScreen(true);
      const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
      setProducts(data.data)
    }

    catch (error) {
      console.log(error);
    }

    finally {
      setIsLoadingScreen(false);
    }

  }

  useEffect(() => {

    getProducts();

  }, [])


  if (isLoadingScreen) {
    return <>

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Loading></Loading>
      </div>

    </>
  }

  return (

    <div className='py-8'>

      <div class="my-10 mx-auto max-w-4xl">
        <input type="text" id="productsNameHome" placeholder='Search'
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
        />

      </div>

      <div className='container max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {products.map((p) => <ProductItem key={p._id} products={p} />)}

      </div>

    </div>
  )
}
