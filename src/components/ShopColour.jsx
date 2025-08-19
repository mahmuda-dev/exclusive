import React from 'react'
import ProductColour from './ProductColour'

const ShopColour = () => {
  return (
    <div className='mt-10'>
        <h2 className="font-poppins font-bold text-xl text-[#262626] mb-[15px]">Shop by Colour</h2>
        <ul>
            <ProductColour title="color 1" colour="red"/>
            <ProductColour title="color 2" colour="green"/>
            <ProductColour title="color 3" colour="black"/>
        </ul>
    </div>
  )
}

export default ShopColour