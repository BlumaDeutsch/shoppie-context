import React, { useContext } from 'react'
import Button from '../../components/button/Button';
import context from '../../context/context';


export default function Loggin() {
  console.log("loggin");
  const { checkIfUserExist, errorLogin } = useContext(context);

  const forgotPassword = () => {
    console.log('so bad :(');
  }
  return (
    <>
      <form onSubmit={checkIfUserExist}>
        <label>email: </label>
        <input name='email' type="email" />
        <label>password: </label>
        <input name='password' type="password" />
        <Button type='button' select={forgotPassword}>forgot password?</Button>
        <Button type='submit'>loggin</Button>
      </form>
      <p>{errorLogin}</p>
    </>
  )
}
