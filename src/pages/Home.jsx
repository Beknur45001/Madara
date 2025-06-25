import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductFetch } from '../redux/products/productSlise'
import ProductList from '../components/ProductList/ProductList'

function Home() {
  const {product, loading, error, category, search} = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductFetch({category, search}))
  }, [dispatch, category, search])

  return (
    <div className='box'>
   <ProductList data={product} />
    </div>
  )
}

export default Home
