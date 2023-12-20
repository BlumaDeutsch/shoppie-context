import React, { useEffect } from 'react'
import Form from '../../components/form/Form';
import PDF from '../../components/pdf/PDF';

const MyApp = () => {
    useEffect(() => {
        console.log('start');
    }, []);

    return (
        <>
        
            <Form></Form>
            <PDF></PDF>

        </>

    )
}

export default MyApp