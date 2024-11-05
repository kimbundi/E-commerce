import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import {useParams} from "react-router-dom"
import Breadcrum from '../components/breadcrum/Breadcrum.jsx'

import Productdisplay from '../components/productdisplay/Productdisplay'
import Descriptionbox from '../components/description/Descriptionbox.jsx'
import Relatedproducts from '../components/RELATEDPRODUCTS/Relatedproducts.jsx'

const Products = () => {
  const  {all_product} = useContext(ShopContext)
  const {productId} = useParams();
const product = all_product.find((e)=>e.id === Number(productId))



  return (
    <div>
      <Breadcrum product={product}/>
    
    <Productdisplay product={product}/>
    <Descriptionbox/>
    <Relatedproducts/>

    </div>
  )
}

export default Products