import React, { useEffect, useState } from 'react'
import Style from './Products.module.css'

export default function Products() {

  const [count, setCount] = useState(0)

  useEffect(() => {

    return () => {

    }
  }, [])


  return (
    <>
      <h1>Products</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}

