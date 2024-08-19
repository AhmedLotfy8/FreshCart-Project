import React, { useEffect, useState } from 'react'
import Style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {

  const [productDetails, setProductsDetials] = useState([])

  const { id } = useParams()

  async function getProductDetails(id) {

    try {
      setIsLoadingScreen(true);
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/` + id)
      setProductsDetials(data.data)
    }

    catch (error) {
      console.log(error);
    }

    finally {
      setIsLoadingScreen(false);
    }

  }

  useEffect(() => {

    getProductDetails(id);

  }, [])


  return (
    <>
      <div className='grid sm:grid-cols-12'>

        <div className='col-span-4 py-5'>

        </div>

        <div className='col-span-4 py-5'>
          
        </div>

      </div>
    </>
  )
}

