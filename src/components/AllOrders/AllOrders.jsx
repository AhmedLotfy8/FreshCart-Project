import React, { useEffect, useState } from 'react'
import Style from './AllOrders.module.css'

export default function AllOrders() {

  const [count, setCount] = useState(0)

  useEffect(() => {

    return () => {

    }
  }, [])


  return (
    <>
      <h1 className='pt-72'>AllOrders</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}

