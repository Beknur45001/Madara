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
              data.map((i) => (
                <div  key={i.id}>
                  <Product pro={i}/>
                  {/* <Wishlist pro1={i}/> */}
                </div>
              ))
            }
    </div>
  )
}

export default ProductList
