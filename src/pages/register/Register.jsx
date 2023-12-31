import React, { useContext } from 'react'
import Button from '../../components/button/Button';
import context from '../../context/context';

export default function Register() {
  const { registerUser, errorPassword, users } = useContext(context);

  return (
    <>
      <form onSubmit= { registerUser }>
        <label>Enter full name: </label>
        <input name='name' type="text" required/>
        <label>Enter email: </label>
        <input name='email' type="email" required/>
        <label>choose password: </label>
        <input name='password' type="password" required/>
        <label>confirm password: </label>
        <input name='confirmPassword' type="password" required/>
        <Button type='submit'>register</Button>
      </form>
      <p>{errorPassword}</p>
      
    </>
  )
}
