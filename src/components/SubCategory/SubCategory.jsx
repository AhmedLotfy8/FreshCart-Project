import React, { useEffect, useState } from 'react'
import Style from './SubCategory.module.css'
import SubCategoryItem from '../SubCategoryItem/SubCategoryItem'
import axios from 'axios'
import Loading from '../Loading/Loading'

export default function SubCategory({ categoryId, categoryName }) {

  const [isLoadingScreen, setIsLoadingScreen] = useState(false)
  const [subCategories, setSubCategories] = useState([])

  async function getSubCategories() {

    try {
      setIsLoadingScreen(true);
      const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`)
      setSubCategories(data.data)
    }

    catch (error) {
      console.log(error);
    }

    finally {
      setIsLoadingScreen(false);
    }

  }

  useEffect(() => {

    getSubCategories();

  }, [])

  useEffect(() => {

    getSubCategories();

  }, [categoryId])

  if (isLoadingScreen) {
    return <>

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Loading></Loading>
      </div>

    </>
  }

  return (
    <>
      <div className="container max-w-5xl mx-auto">
        <h3 className='text-center text-green-600 dark:text-green-500 py-5'>{categoryName} subcategories</h3>

        <div className='grid sm:grid-cols-12 gap-5'>
          {subCategories.map((subCat) => <SubCategoryItem key={subCat._id} subCategories={subCat} />)}
        </div>

      </div>
    </>
  )
}

