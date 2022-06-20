import * as React from 'react';
import  { useEffect, useState } from "react";
import TableAxios from '../../../components/Table';
import { useNavigate } from "react-router-dom";
import Login from "../../Login"
import servicioUsuario from '../../../services/usuarios'
import NotificacionLegajo from '../../../components/NotificacionesU2'
import  useNoti from '../../../hooks/useNoti'
import  useUser from '../../../hooks/useUser'
import BarraLAteral from '../../../components/MenuIzq2'
const drawerWidth = 240;

export default function MenuUsuario2() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [] = useState('')
  const {cantidad } = useNoti()
  const nombre  = useUser()

  useEffect(() => {






    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      servicioUsuario.setToken(user.token) 

      
    } 


  }, [])

  


  return (
    <BarraLAteral>
    <TableAxios/>
 </BarraLAteral>
  );
}
