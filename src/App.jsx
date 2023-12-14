import React from 'react'
import AppEmp  from './components/AppEmp/AppEmp'
import { Provider } from './context/users'

const App = () => {
  
  return (
  
      <Provider>
         <AppEmp/>
      </Provider>
      
   
  )
}

export default App