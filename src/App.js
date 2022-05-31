import Rutas from './Rutas/Rutas'
import Menu from "./components/Navbar";
import {BrowserRouter, useRoutes} from 'react-router-dom'
function App () {
  const element = useRoutes(Rutas)
  return element
}

export default () =>
 <BrowserRouter>
   <Menu />
 <App />
 </BrowserRouter>