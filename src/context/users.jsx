import { createContext, useState } from "react";


const ProductsContext = createContext()

const Provider = ({ children }) => {
  const baseURL = `https://randomuser.me/api/`;
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState('');

  const getParam = (p) => {
    setParam(p.target.value);
  };

  const getUsers = async () => {
    try {
      console.log('trying to fetch');
      const res = await fetch(`${baseURL}?results=10`);
      const temp = await res.json();
      setUsers(temp.results);
      console.log(temp.results);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getUsersByNat = async () => {
    try {
      console.log('getUsersByNat');
      const res = await fetch(`${baseURL}?results=10&nat=${param}`);
      const temp = await res.json();
      setUsers(temp.results);
      console.log(temp.results);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getUsersByGender = async () => {
    try {
      console.log(param);
      const res = await fetch(`${baseURL}?results=10&gender=${param}`);
      const temp = await res.json();
      setUsers(temp.results);
      console.log(temp.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  const shared = { users, getUsers, getUsersByGender, getUsersByNat, getParam }

  return (
    <ProductsContext.Provider value={shared}>
      {children}
    </ProductsContext.Provider>
  )
}

export { Provider }
export default ProductsContext