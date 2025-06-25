import React from 'react'
// import { useDispatch } from 'react-redux'

function Product({pro}) {

    // const dispatch = useDispatch()

  return (
    <div>
      <div>
        <img src={pro.image} alt="" />
        {/* <h4>{pro.title}</h4>
        <p>${pro.price}</p> */}
      </div>
    </div>
  )
}

export default Product
