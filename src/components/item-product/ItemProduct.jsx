import React, { useContext, useState } from 'react'
import { GrEdit } from "react-icons/gr";
import './product.css'
import ItemProductEdit from './ItemProductEdit';
import ProductsContext from '../../context/users';

// props
export default function ItemProduct({product}) {
    const [editMode, setEditMode] = useState(false)
    const { addToCart, onEditProduct } = useContext(ProductsContext);
    const toggleEditMode =()=>{
        setEditMode((em) =>!em)
    }
    const handleEditItemDetails = ({title, price, id})=>{
        onEditProduct({title, price, id})
        setEditMode(false)
    }
    return (
        <div className='item-card'  >
            <h1> {product.title}</h1>
            <h1> {product.price}</h1>
           {editMode&&<ItemProductEdit editItemDetails={handleEditItemDetails} item={product}/>} 
            <button onClick={toggleEditMode}><GrEdit/></button>
            <button onClick={() => addToCart(product)}>Buy Now</button>
            {/* <img src={product.image} alt="" /> */}
        </div>
    );
}
