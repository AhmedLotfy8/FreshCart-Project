import React, { useEffect, useState } from 'react'
import Style from './Home.module.css'
import axios from 'axios'
import { data } from 'autoprefixer';

export default function Home() {

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

      <div className='py-5'>


        <h1 className='text-center mb-5'>Home</h1>

        <div className='container max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10'>


          {products.length == 0 ? <div className='text-red-600'>Loading</div> :

            products.map(function (p) {

              return <>

                <div className=''>
                  <img src={p.imageCover} alt="" />
                  <h3 className='text-green-500 text-center'>{p.title.split(' ').slice(0, 2).join(' ')}</h3>
                  <p className='line-clamp-3'>{p.description}</p>
                </div>

              </>

            })

          }

        </div>

      </div>
    </>
  )
}

