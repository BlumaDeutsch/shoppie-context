import React, { useContext } from 'react'
import Button from '../../components/button/Button';
import { useNavigate  } from "react-router-dom";
import context from '../../context/context';

export default function Home() {
    const navigate = useNavigate();
    const { users } = useContext(context);

    return (
        <>
            <h1>resume builder</h1>
            <Button type='button' select={() => { return navigate('/loggin'); }}>loggin</Button>
            <p>dont have an account?</p>
            <Button type='button' select={() => { return navigate('/register'); }}>register</Button>
            {users.map((user, index) => {
                return (
                    <>
                        <p>name: {user.name}</p>
                        <p>email: {user.email}</p>
                        <p>company: {user.work[0].company}</p>
                        <p>school: {user.education[0].school}</p>
                    </>
                )
            })}
        </>
    )
}
