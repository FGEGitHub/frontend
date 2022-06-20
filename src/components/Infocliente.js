import React, { useEffect, useState, Fragment } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import servicioCliente from '../services/clientes'



const Infocliente =(props) => {
    /* const [cliente, setCliente] = useState([])
    const [verDetalles, setVerDetalles] = useState(false)

    useEffect(() => {
      
        traer()
        
    }, [])   
  

     const traer = async() => {
       
      
        const  cliente = await servicioCliente.cliente(props.cuil_cuit)
        console.log(cliente)
        setCliente(cliente)
    
       
    
        ;
      };  */


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);




    return  (
 
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
        <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} /* color="text.secondary" */ gutterBottom>
        
              <p>{props.cliente[0].Nombre}</p> 
        </Typography>
        <Typography variant="h5" component="div">
         <label>{props.cliente[0].domicilio}</label>
        </Typography>
        <Typography sx={{ mb: 1.5 }} /* color="text.secondary" */>
        <label>{props.cliente[0].observaciones}</label>
        </Typography>
        <Typography variant="body2">
        Ingresos declarados:<label>{props.cliente[0].ingresos}</label>
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    
    </React.Fragment>  
          </Card>
      </Box>
    
    )
  
}
export default Infocliente