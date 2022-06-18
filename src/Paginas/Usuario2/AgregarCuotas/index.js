import * as React from 'react';
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import DialogActions from '@mui/material/DialogActions';

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
import { useNavigate } from "react-router-dom";
import servicioCuotas from '../../../services/cuotas'
import servicioUsuario from '../../../services/usuarios'

const drawerWidth = 240;

export default function MenuUsuario2() {
    let params = useParams()
    let id = params.id
  const navigate = useNavigate();
  const [user, setUser] = useState(null)
  const [estadoCuotas, setestadoCuotas] = useState({
    anticipo: "",
    mes:"",
    anio:"",
    monto: "",
    cantidad_cuotas: "",
    
   
  })
  useEffect(() => {
    
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      servicioUsuario.setToken(user.token) 

      
    } 
   /*  if (user){
      navigate('/login')
    } */

    //
  }, [])

  const agregarCuotas = async (event) => {
    event.preventDefault();
    try {

        const respuesta = await servicioCuotas.agregarCuotas({
            anticipo: estadoCuotas.anticipo,
            monto_total:  estadoCuotas.monto_total,
            cantidad_cuotas: estadoCuotas.cantidad_cuotas,
            mes: estadoCuotas.mes,
            anio: estadoCuotas.anio,
            id:id
          
       })
       alert(respuesta)
       navigate('/usuario2/clientes')
       
       } catch (error) {
         console.error(error);
         console.log('Error algo sucedio')
     
       
       }
  }



  const handleChange = (e) =>
  setestadoCuotas({  ...estadoCuotas, [e.target.name]: e.target.value })
  let path =''

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
      path:  '/usuario2/lotes',
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
      <form  onSubmit={agregarCuotas}> 
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Anticipo"
            name="anticipo"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mes"
            name="mes"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Año"
            name="anio"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Monto"
            name="monto_total"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Cantidad de cuotas"
            name="cantidad_cuotas"
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
     
    

          <DialogActions>
          <Button  type="submit">Enviar</Button>
        </DialogActions>
           </form>

    </Box>
  </Box>
    
               ) 
         
   
  
  
}
