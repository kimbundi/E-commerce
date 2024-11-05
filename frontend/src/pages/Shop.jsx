import React from 'react'
import Hero from '../components/hero/Hero'
import Poopular from '../components/popular/Poopular'
import Offers from '../components/offers/Offers'
import Newcollections from '../components/newcollections/Newcollections'
import Newsletter from '../components/newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Poopular/>
      <hr/>
      <Offers/>
      <Newcollections/>
      <Newsletter/>
    </div>
  )
}

export default Shop