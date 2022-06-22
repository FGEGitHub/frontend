import * as React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import DetalleC from '../../../components/Detallecliente';
import { useNavigate } from "react-router-dom";
import BarraLAteral from '../../../components/MenuIzq2'
import servicioUsuario from '../../../services/usuarios'
import Ingresos from '../../../components/Ingresos'


//import {makeStyles} from "@material-ui/core/styles"


const drawerWidth = 240;

export default function DetalleCliente() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [modal, setModal] = useState(false)
 
  const [ingreso, setIngreso] = useState({
    ingreso: "",
   
  });

  useEffect(() => {

    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      servicioUsuario.setToken(user.token)


    }
 /*    if (!user) {
      navigate('/login')
    } */

    //
  }, [])


  
  


 

  ////////

  return (
    <BarraLAteral>
{<Ingresos/>}
      {<DetalleC />}
 </BarraLAteral>
  );
}