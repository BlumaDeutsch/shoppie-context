import React, { useContext, useEffect } from 'react'
import ListProducts from './list-products/ListProducts';
import ProductsContext from '../context/users';

const AppShop = () => {
const {getProducts} = useContext(ProductsContext)    
        
        useEffect(() => {
          getProducts();
        }, []);
        
        
      
      
  return (
    <ListProducts />
 
  )
}

export default AppShop
