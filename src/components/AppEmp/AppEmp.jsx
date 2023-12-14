import React, { useContext, useEffect } from 'react'
import ListEmp from '../ListEmp/ListEmp';
import ProductsContext from '../../context/users';
import Button from '../button/Button';
import Input from '../input/Input';

const AppEmp = () => {
    const { getUsers, getUsersByGender, getUsersByNat, getParam } = useContext(ProductsContext)

    useEffect(() => {
        console.log('start');
        getUsers();
    }, []);




    return (
        <>
            <Button select={getUsersByNat}>Search by nat</Button>
            <Button select={getUsersByGender}>Search by gender</Button>
            <Input select={getParam} />
            <ListEmp />
        </>

    )
}

export default AppEmp