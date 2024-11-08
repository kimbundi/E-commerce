import React from 'react'
import './Breadcrum.css';
import arrow_icon from "../asset/breadcrum_arrow.png"



const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
    Home   <img src={arrow_icon} alt="arrow" />SHOP <img src={arrow_icon} alt="arrow" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        
    </div>
  )
}

export default Breadcrum