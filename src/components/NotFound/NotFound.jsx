import React, { useEffect, useState } from 'react'
import Style from './NotFound.module.css'
import { Link } from 'react-router-dom'

export default function NotFound() {

  const [count, setCount] = useState(0)

  useEffect(() => {

    return () => {

    }
  }, [])


  return (
    <>
      <div className='container max-w-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h2 className='dark:text-white mb-3'>404 Not Found</h2>
        <h3 className='dark:text-white'>The page you are looking for does not exist.</h3>

        <div className='flex justify-between items-center mx-10 mt-3'>
          <Link to={"/"}>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Home</button>
          </Link>

          <Link to={"/cart"}>
            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Cart</button>
          </Link>
        </div>

      </div>
    </>
  )
}

