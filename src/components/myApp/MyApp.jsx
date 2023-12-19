import React, { useContext, useEffect, useState } from 'react'
import ListEmp from '../ListEmp/ListEmp';
import ProductsContext from '../../context/context';
import Button from '../button/Button';
import Input from '../input/Input';
import Form from '../form/Form';
import context from '../../context/context';
import Work from '../work/Work';
import PDF from '../pdf/PDF';

const MyApp = () => {
    useEffect(() => {
        console.log('start');
    }, []);

    const { work } = useContext(context);



    return (
        <>
        
            <Form></Form>
            <PDF></PDF>

        </>

    )
}

export default MyApp