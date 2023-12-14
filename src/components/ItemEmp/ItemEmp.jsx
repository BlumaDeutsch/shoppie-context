import React, { useContext, useState } from 'react'
import { GrEdit } from "react-icons/gr";
//import ItemuserEdit from './ItemuserEdit';
import usersContext from '../../context/users';
import './ItemEmp.css';

// props
export default function ItemEmp({user}) {
    const [editMode, setEditMode] = useState(false)
    const { addToCart, onEdituser } = useContext(usersContext);
    const toggleEditMode =()=>{
        setEditMode((em) =>!em)
    }
    const handleEditItemDetails = ({title, price, id})=>{
        onEdituser({title, price, id})
        setEditMode(false)
    }
    return (
        <div id='user'>
            <h2> {user.name.title} </h2>
            <h2> {user.name.first} </h2>
           {/* {editMode&&<ItemuserEdit editItemDetails={handleEditItemDetails} item={user}/>} 
            <button onClick={toggleEditMode}><GrEdit/></button>
            <button onClick={() => addToCart(user)}>Buy Now</button>
            <img src={user.image} alt="" /> */}
        </div>
    );
}
