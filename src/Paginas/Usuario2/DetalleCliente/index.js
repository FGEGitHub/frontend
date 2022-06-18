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

  let path = ''

  const handleClick = (path) => {
    console.log(path)
    navigate(path);
  };

  
  const menuItems = [
    {
      text: 'Ver Clientes',
      icon: <GroupIcon color="primary" />,
      path: '/usuario2/clientes'
    },
    {
      text: 'Buscar Clientes',
      icon: <SearchIcon color="primary" />,
      path: '/usuario2/clientes'
    },
    {
      text: 'Lotes',
      icon: <NfcIcon color="primary" />,
      path: '/usuario2/lotes',
    },
    {
      text: 'Aprobación de Pagos',
      icon: <PriceCheckIcon color="primary" />,
      path: '/aprobacion'
    },
    {
      text: 'Aprobación de CBU',
      icon: <AccountBalanceIcon color="primary" />,
      path: '/cbu'
    },
    {
      text: 'Aprobación de Legajos',
      icon: <AssignmentTurnedInIcon color="primary" />,
      path: '/lejos'
    },
  ];
  return (
    <>


      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Fideicomiso Gestion
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => {
                  handleClick(item.path)
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>

          <Divider />

        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <br/> <br/> <br/>
          {<Ingresos/>}
         {/*  <Button onClick={() => abrirCerrarModal()}> Determinar ingreso</Button>
          <Modal
            open={modal}
            onClose={abrirCerrarModal}>
            <div style={{position: 'absolute',
  width: 400,
  backgroundcolor:'white',
  border: '2px solid #000',

  padding: '16px 32px 24px',
  top:'50%',
  }} >
      <div align="center">
        <h2>formulario</h2>
      </div>
      <form onSubmit={FormDeterminar}>
      <TextField label="Nombre"name="ingreso" onChange={handleChange}  />
      < Button  type="submit">Guardar</Button>
      </form>
      
      <div align="right">
        
        <Button onClick={() => abrirCerrarModal()}> Cancelar</Button>
      </div>
    </div>
          </Modal> */}
          {<DetalleC />}
        </Box>
      </Box>


    </>
  );
}