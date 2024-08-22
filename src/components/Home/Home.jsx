import React, { useEffect, useState } from 'react'
import Style from './Home.module.css'
import MainSlider from '../MainSlider/MainSlider';
import CategorySlider from '../CategorySlider/CategorySlider';
import RecentProducts from '../RecentProducts/RecentProducts';


export default function Home() {



  return (
    <>
      <div className='py-24'>
        <MainSlider></MainSlider>
        <CategorySlider></CategorySlider>
        <RecentProducts></RecentProducts>
      </div>

    </>
  )
}

