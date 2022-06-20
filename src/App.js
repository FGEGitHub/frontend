import Rutas from './Rutas/Rutas'
import NotiContext from './context/NotiContext';
import UserContext from './context/UserContext';
import {BrowserRouter, useRoutes} from 'react-router-dom'
import {useEffect,useState} from 'react'
import Login from './Paginas/Login';
import servicioUsuario from './services/usuarios'

function App () {
  const element = useRoutes(Rutas)
  const [userContext, setUserContext] = useState(null)

  const [user, setUser] = useState(null)

///

useEffect(() => {
  

   const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
   if (loggedUserJSON) {
     const user = JSON.parse(loggedUserJSON)
     setUser(user)
     servicioUsuario.setToken(user.token) 

     
   } 

 }, [])

///
  const cantNoti ={
    cantidad: 5,
   }

    const usuario ={
    nombre: 'nombre',
   } 



if (user != null){
  return (
  <UserContext.Provider value={{userContext, setUserContext}}>
  <NotiContext.Provider value={cantNoti}>

    {element}   

</NotiContext.Provider>
   </UserContext.Provider>)
}else {
  return(<Login/>)

}}

export default () =>
 <BrowserRouter>
 
 <App />

 </BrowserRouter>