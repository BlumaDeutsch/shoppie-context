import { createContext, useState  } from "react";
import { useNavigate  } from "react-router-dom";

// import { firestore } from "../firebase/index";


const ProductsContext = createContext()

const Provider = ({ children }) => {

  const navigate = useNavigate();


  const [name, setName] = useState('');
  const [work, setWork] = useState([{
    company: '',
    from: 0,
    to: 0
  }]);
  const [education, setEducation] = useState([{
    school: '',
    from: 0,
    to: 0
  }]);

  const createResume = async (e) => {
    e.preventDefault();

    setName(e.target.name.value);
    setWork([{ company: e.target.company1.value, from: e.target.fromC1.value, to: e.target.toC1.value }, { company: e.target.company2.value, from: e.target.fromC2.value, to: e.target.toC2.value }, { company: e.target.company3.value, from: e.target.fromC3.value, to: e.target.toC3.value }]);
    setEducation([{ school: e.target.school1.value, from: e.target.fromS1.value, to: e.target.toS1.value }, { school: e.target.school2.value, from: e.target.fromS2.value, to: e.target.toS2.value }, { school: e.target.school3.value, from: e.target.fromS3.value, to: e.target.toS3.value }]);
  }


  const [errorLogin, setErrorLogin] = useState('');

  const [users, setUsers] = useState([{
    name: 'moshe',
    email: 'a@a.com',
    password: '123'
  }])

  const checkIfUserExist = (user) => {
    user.preventDefault();
    users.map((someUser) => {
      console.log(someUser.email, user.target.email.value);
      if (someUser.email === user.target.email.value && someUser.password === user.target.password.value){
        return navigate('/resume');
      }
      setErrorLogin('email or password are nor correct');
      return navigate('/loggin');
    })
  }


  const shared = { createResume, work, education, name, users, checkIfUserExist, errorLogin }

  return (
    <ProductsContext.Provider value={shared}>
      {children}
    </ProductsContext.Provider>
  )
}

export { Provider }
export default ProductsContext