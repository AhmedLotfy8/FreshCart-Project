import React, { useEffect, useState } from 'react'
import Style from './Cart.module.css'

export default function Cart() {

  const [count, setCount] = useState(0)

  useEffect(() => {

    return () => {

    }
  }, [])


  return (
    <>
      <h1>Cart</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}

