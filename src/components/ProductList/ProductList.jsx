import React, {useEffect} from 'react'
import "./List.scss"
import Product from '../product/Product'
import { useSelector } from 'react-redux';
import Loading from '../Loading/loading'
// import Wishlist from '../../pages/Wishlist';

function ProductList({data}) {
    const {loading} = useSelector((state) => state.product)

    if(loading){
      return <Loading/>
    }

    return (
      <div className='pr'>
          {
          data?.map((product) => (
  <Product pro={product} />
))}

    </div>
  )
}

export default ProductList
