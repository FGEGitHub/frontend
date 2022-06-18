import Rutas from './Rutas/Rutas'
import NotiContext from './context/NotiContext';
import UserContext from './context/UserContext';
import {BrowserRouter, useRoutes} from 'react-router-dom'
function App () {
  const element = useRoutes(Rutas)

  const cantNoti ={
    cantidad: 5,
   }

   const usuario ={
    nombre: 'nombre',
   }




  return (
  <UserContext.Provider value={usuario}>
  <NotiContext.Provider value={cantNoti}>

    {element}   

</NotiContext.Provider>
   </UserContext.Provider>)
}

export default () =>
 <BrowserRouter>
 
 <App />

 </BrowserRouter>