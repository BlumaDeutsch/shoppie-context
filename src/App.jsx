import React from 'react'
import Home from './components/home/Home'
import MyApp from './components/myApp/MyApp'
import AppEmp  from './components/myApp/MyApp'
import { Provider } from './context/context'

const App = () => {
  
  return (
  
      <Provider>
         <MyApp/>
      </Provider>
      
   
  )
}

export default App