import React, { useContext, useEffect } from 'react'
import ListEmp from '../ListEmp/ListEmp';
import ProductsContext from '../../context/context';
import Button from '../button/Button';
import Input from '../input/Input';
import Form from '../form/Form';

const AppEmp = () => {
    const { createResume } = useContext(ProductsContext)

    useEffect(() => {
        console.log('start');
    }, []);




    return (
        <>
            {/* <Button select={getUsersByNat}>Search by nat</Button>
            <Button select={getUsersByGender}>Search by gender</Button>
            <Input select={getParam} />
            <ListEmp /> */}
            <Form></Form>

            {/* <Button select={createResume}>Create a resume</Button> */}

        </>

    )
}

export default AppEmp