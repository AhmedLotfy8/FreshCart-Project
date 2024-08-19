import React, { useEffect, useState } from 'react'
import Style from './Brands.module.css'
import axios from 'axios'

export default function Brands() {

  const [brands, setBrands] = useState([])

  async function getBrands() {

    try {
      const response = await axios.get('https://ecommerce.routemisr.com/api/v1/brands')

      setBrands(response.data.data)
    }

    catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {

    getBrands();

  }, [])

  useEffect(() => {

    console.log(brands);


  }, [brands])


  return (
    <>

      <div className="container mx-auto max-w-6xl py-5">

        <h1 className='text-green-600 text-center font-semibold'>All Brands</h1>


        <div className='py-32'>

          <div className='container max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-7'>

            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++ Loading */}
            {brands.length == 0 ? <div className='text-red-600'>Loading</div> :

              brands.map(function (bad) {

                return <>

                  <div className={`${Style.brand} rounded-lg border border-gray-200 cursor-pointer`}>

                    <div className='bg-cover'>
                      <img src={bad.image} className=' w-full object-cover rounded-t-md' alt="" />
                    </div>

                    <div className='py-3'>
                      <h3 className='text-green-600 dark:text-green-500 font-semibold text-center'>{bad.name}</h3>
                    </div>

                  </div>

                </>

              })

            }

          </div>

        </div>

      </div>

    </>
  )
}

