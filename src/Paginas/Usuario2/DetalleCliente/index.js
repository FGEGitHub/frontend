import * as React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';
import NfcIcon from '@mui/icons-material/Nfc';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DetalleC from '../../../components/Detallecliente';
import { useNavigate } from "react-router-dom";
import BarraLAteral from '../../../components/MenuIzq2'
import servicioUsuario from '../../../services/usuarios'
import Ingresos from '../../../components/Ingresos'

import { Button, } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Modal } from '@material-ui/core';
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
      {<DetalleC />}
 </BarraLAteral>
  );
}