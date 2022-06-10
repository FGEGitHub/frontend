import { useParams } from "react-router-dom"
import servicioLotes from '../services/lotes'
import servicioCuotas from '../services/cuotas'
import React, { useEffect, useState, Fragment } from "react";
import Cuotascliente from './CuotasCliente';
import Button from '@mui/material/Button';





const LotesCliente =(props) => {
useEffect(() => {
       
    traer()
    
}, []) 
    const [lotes, setLotes] = useState([''])
    const [cuotas, setCuotas] = useState([''])
   

   const vercuotas = async(index) => {
    
    const  cuotas = await servicioCuotas.vercuotas(index)
    setCuotas(cuotas)
   return (<h2>index</h2>)
    ;
  }; 

    const traer = async () => {
      console.log('etc')
        const  lotes = await servicioLotes.lotesCliente(props.cuil_cuit)
        console.log(lotes)
        setLotes(lotes)
      
      
       
        
        }
       
         
   
    
    return (
        <Fragment>
            {
               lotes.map((item,index) =>
                  <div>
                  <Button key= {index} variant="contained"onClick={()=>{vercuotas(item['id'])}}>{item['zona']}F{item['fraccion']}M{item['manzana']}L{item['lote']}</Button>
                {/*   <Button onClick={()=>{vercuotas(index)}}>ir</Button> */}
                  </div>
               ) 
            }
      {  <Cuotascliente 
      lotes = {lotes}
      cuotas = {cuotas} /> }
        </Fragment>
        
    )
       /*  <List>
        {
        lotes.map((item) => (
            
            <ListItem 
              button 
              key={item.text} 
              onClick={() => {
                handleClick(item.path)
              }}
            >
            {/*   <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} /> }
            </ListItem>
          ))}
        </List> */
       
}
export default LotesCliente