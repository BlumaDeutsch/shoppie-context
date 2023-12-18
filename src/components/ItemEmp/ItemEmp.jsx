import React, { useContext, useState } from 'react'
import { GrEdit } from "react-icons/gr";
//import ItemuserEdit from './ItemuserEdit';
import usersContext from '../../context/context';
import './ItemEmp.css';

// props
export default function ItemEmp({ user }) {
    const [editMode, setEditMode] = useState(false)
    const { addToCart, onEdituser } = useContext(usersContext);
    const toggleEditMode = () => {
        setEditMode((em) => !em)
    }
    const handleEditItemDetails = ({ title, price, id }) => {
        onEdituser({ title, price, id })
        setEditMode(false)
    }
    return (
        <div id='user'>
            <img src={user.picture.medium} alt="pic" />
            <h2> {user.name.title} </h2>
            <h2> {user.name.first} </h2>
            <h4>phone: {user.phone}</h4>
            <h4>email: {user.email}</h4>
            <h4>nation: {user.nat}</h4>

        </div>
    );
}
