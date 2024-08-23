import React, { useEffect, useState } from 'react'
import Style from './SubCategoryItem.module.css'

export default function SubCategoryItem({ subCategories }) {

  return (
    <>
      <div className={`${Style.subCategoryItem} col-span-4 text-center border border-gray-300 rounded`}>
        <h4 className='text-2xl font-semibold py-3 dark:text-white'>{subCategories.name}</h4>
      </div>
    </>
  )
}

