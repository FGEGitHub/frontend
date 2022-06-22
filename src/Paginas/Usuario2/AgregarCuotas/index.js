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
import MenuIzq2 from '../../../components/MenuIzq2';

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

 
  

  return (

 <MenuIzq2>
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

 </MenuIzq2>
 
    
               ) 
         
   
  
  
}
