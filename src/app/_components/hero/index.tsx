import React from 'react'
import HeroSeller from '../hero-seller'
import data from './data'

export default function Hero() {
  return (
    <div className="home-sellers-container">
      {data.map((item, index) => {
        return <HeroSeller key={index} {...item} />
      })}
    </div>
  )
}
