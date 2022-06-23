import React, { useEffect, useState, Fragment } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import servicioCliente from '../services/clientes'
import { useParams } from "react-router-dom"


const Infocliente =  (props) => {
   const [cliente, setCliente] = useState([])
    const [verDetalles, setVerDetalles] = useState(false)
    let params = useParams()
    let cuil_cuit = params.cuil_cuit

    useEffect(() => {
      
        traer()
        
    }, [])   
  

     const traer = async() => {
       
      console.log(cuil_cuit)
        const  cliente = await servicioCliente.cliente(cuil_cuit)
        console.log(cliente)
        setCliente(cliente)
    
       
    
        ;
      };  
      const print = async(dato) => {
       
        
       return(dato)
    
       
    
        ;
      }


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

if (cliente != undefined){
  return  (
 
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} /* color="text.secondary" */ gutterBottom>
    
    {cliente[0].nombre}
     
      </Typography>
      <Typography variant="h5" component="div">

       
      </Typography>
      <Typography sx={{ mb: 1.5 }} /* color="text.secondary" */>
   
      
      </Typography>
      <Typography variant="body2">
   
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
  
  </React.Fragment>  
        </Card>
    </Box>
  
  )

}else {

return(

<h1>Hola</h1>)


}


    
  
}
export default Infocliente