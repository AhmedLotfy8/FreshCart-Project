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

    catch(error) {
      console.log(error);
    }

  }

  getBrands()

  return (
    <>

      <div className="container mx-auto max-w-6xl py-5">

        <h1 className='text-green-600 text-center'>All Brands</h1>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-12 text-center'>

          <div>
            <h2> heelow</h2>
            {/* <div>
              <img src={brands[0].image} alt="" />
            </div> */}
{/* 
            <div>
              <p>{brands[0].name}</p>
            </div> */}

          </div>

          <div>
            <h2> heelow</h2>
          </div>

          <div>
            <h2> heelow</h2>
          </div>

          <div>
            <h2> heelow</h2>
          </div>

        </div>

      </div>

    </>
  )
}

