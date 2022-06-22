import Rutas from './Rutas/Rutas'
import NotiContext from './context/NotiContext';
import UserContext from './context/UserContext';
import InusualContext from './context/inusualesContext';
import {BrowserRouter, useRoutes} from 'react-router-dom'
import {useEffect,useState} from 'react'
import Login from './Paginas/Login';
import servicioUsuario from './services/usuarios'
import servicioAprobaciones from './services/Aprobaciones'

function App () {
  const element = useRoutes(Rutas)
  const [userContext, setUserContext] = useState()
  const [notiContext, setUserNotiContext] = useState(0)
  const [inusualContext, setUsInusualContext] = useState(0)

  const [user, setUser] = useState(null)

///

useEffect(() => {
  
   const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
   if (loggedUserJSON) {
     const userContext = JSON.parse(loggedUserJSON)
     
     setUserContext(userContext)
   
     servicioUsuario.setToken(userContext.token) 
     declarar()
     inusuales()

   } 



 }, [])
 const inusuales = async () => {

  const cantInusual ={
    cantidadInusual: 7}
    setUsInusualContext(cantInusual)

}

 const declarar = async () => {

  const cantNoti ={
    cantidad: 8}
   setUserNotiContext(cantNoti)

}

///
  

    const usuario ={
    nombre: 'nombre',
   } 



if (userContext != null){
  return (
    
  <UserContext.Provider value={{userContext}}>
    <InusualContext.Provider value={inusualContext}>
  <NotiContext.Provider value={notiContext}>

    {element}   

</NotiContext.Provider>
</InusualContext.Provider>
   </UserContext.Provider>)
}else {
  return(<Login/>)

}}

export default () =>
 <BrowserRouter>
 
 <App />

 </BrowserRouter>