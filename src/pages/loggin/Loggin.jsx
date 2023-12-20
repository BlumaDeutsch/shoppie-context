import react from 'react'
import Button from '../../components/button/Button';

export default function Loggin() {
  console.log("loggin");
  const forgotPassword = () => {
    console.log('so bad :(');
  }
  return (
    <form onSubmit={}>
      <label>email: </label>
      <input type="email" />
      <label>password: </label>
      <input type="password" />
      <Button type='button' select={forgotPassword}>forgot password?</Button>
      <Button type='submit'>loggin</Button>
    </form>
  )
}
