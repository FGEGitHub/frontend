import { useParams } from "react-router-dom"
import servicioLotes from '../services/lotes'
import servicioCuotas from '../services/cuotas'
import React, { useEffect, useState, Fragment } from "react";

import Button from '@mui/material/Button';





const LotesCliente =(props) => {
    const [lotes, setLotes] = useState([''])
    const [algo, setAlgo] = useState([1,4,6,1,6])


   const vercuotas = async(id) => {
    console.log(id)
    const  cuotas = await servicioCuotas.vercuotas(id)
    ;
  }; 

    const traer = async () => {
        
        const  lotes = await servicioLotes.lotesCliente(props.cuil_cuit)
        console.log(lotes)
        setLotes(lotes)
      
      
       
        
        }
       
         
   
       useEffect(() => {
        console.log('algo')
           traer()
           
       }, [])
    return (
        <Fragment>
            {
               lotes.map((item,index) =>
                  <div>
                  <Button key= {index} variant="contained">{item['zona']}F{item['fraccion']}M{item['manzana']}L{item['lote']}</Button>
                  <Button onClick={vercuotas('hola')}>ir</Button>
                  </div>
               ) 
            }

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