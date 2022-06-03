import Rutas from './Rutas/Rutas'

import {BrowserRouter, useRoutes} from 'react-router-dom'
function App () {
  const element = useRoutes(Rutas)
  return element
}

export default () =>
 <BrowserRouter>

 <App />
 </BrowserRouter>