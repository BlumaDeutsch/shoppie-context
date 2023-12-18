import { createContext, useState } from "react";
import { Await } from "react-router-dom";

// import { firestore } from "../firebase/index";

const ProductsContext = createContext()

const Provider = ({ children }) => {
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
    console.log(e.target.name.value);
    console.log(e.target.company1.value);
    console.log(e.target.fromC1.value);

    setName(e.target.name.value);
    let i;
    for (i = 0; i < 3; ++i) {
      setWork([...work, {company: 'c', from: i + 1}]);
    }
    setTimeout(() => {console.log(work);}, 1000);

    //const array = await firestore.collection('try').get();

  }


  const shared = { createResume }

  return (
    <ProductsContext.Provider value={shared}>
      {children}
    </ProductsContext.Provider>
  )
}

export { Provider }
export default ProductsContext