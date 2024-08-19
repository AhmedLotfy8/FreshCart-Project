import React, { useEffect, useState } from 'react'
import Style from './Categories.module.css'
import axios from 'axios'

export default function Categories() {

  const [categories, setCategories] = useState([])

  async function getCategories() {

    try {
      const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      setCategories(data.data)

    }

    catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {

    getCategories();

  }, [])

  return (
    <>

      <div className='py-32'>

        <div className='container max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-7'>

          {/* +++++++++++++++++++++++++++++++++++++++++++++++++++ Loading */}
          {categories.length == 0 ? <div className='text-red-600'>Loading</div> :

            categories.map(function (cat) {

              return <>

                <div className={`${Style.category} rounded-lg border border-gray-200 cursor-pointer`}>
                  
                  <div className='bg-cover'>
                    <img src={cat.image} className='h-72 w-full object-cover rounded-t-md' alt="" />
                  </div>

                  <div className='py-3'>
                    <h3 className='text-green-600 dark:text-green-500 font-semibold text-center'>{cat.name}</h3>
                  </div>

                </div>

              </>

            })

          }

        </div>

      </div>


    </>
  )
}




