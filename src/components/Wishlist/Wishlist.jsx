import React, { useEffect, useState } from 'react'
import Style from './Wishlist.module.css'

export default function Wishlist() {

  const [count, setCount] = useState(0)

  useEffect(() => {

    return () => {

    }
  }, [])


  return (
    <>
      <h1>Wishlist</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}

