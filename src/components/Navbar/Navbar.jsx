import React, { useEffect, useState } from 'react'
import Style from './Navbar.module.css'

export default function Navbar() {

  const [count, setCount] = useState(0)

  useEffect(() => {

    return () => {

    }
  }, [])


  return (
    <>
      <h1>Navbar</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}

