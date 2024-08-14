import React, { useEffect, useState } from 'react'
import Style from './Home.module.css'

export default function Home() {

  const [count, setCount] = useState(0)

  useEffect(() => {

    return () => {

    }
  }, [])


  return (
    <>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}

