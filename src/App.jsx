// import react from 'react'

import { Provider } from './context/context'
import { BrowserRouter } from "react-router-dom"
import AppRoutes from './components/appRoutes/AppRoutes'

const App = () => {

  return (
    <BrowserRouter>

      <Provider>
        <AppRoutes />

      </Provider>
    </BrowserRouter>


  )
}

export default App