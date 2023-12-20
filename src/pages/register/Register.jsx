import react from 'react'
import Button from '../../components/button/Button';

export default function Register() {
  return (
    <form onSubmit={() => {return <Link to='/loggin'/>}}>
      <label>Enter full name: </label>
      <input type="text" />
      <label>Enter email: </label>
      <input type="email" />
      <label>choose password: </label>
      <input type="password" />
      <label>confirm password: </label>
      <input type="password" />
      <Button type='submit'>register</Button>
    </form>
  )
}
