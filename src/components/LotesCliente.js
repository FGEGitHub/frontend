import { useParams } from "react-router-dom"
import servicioLotes from '../services/lotes'
import servicioCuotas from '../services/cuotas'
import React, { useEffect, useState, Fragment } from "react";

import Button from '@mui/material/Button';
import MUIDataTable from "mui-datatables";




const LotesCliente =(props) => {
useEffect(() => {
       
    traer()
    
}, []) 
    const [lotes, setLotes] = useState([''])
    const [cuotas, setCuotas] = useState([''])
    

   

   const vercuotas = async(index) => {
    
    const  cuotas = await servicioCuotas.vercuotas(index)
    if (cuotas !== ''){setCuotas(cuotas)}
    

 
   

    ;
  }; 

    const traer = async () => {
      console.log('etc')
        const  lotes = await servicioLotes.lotesCliente(props.cuil_cuit)
        console.log(lotes)
        setLotes(lotes)
      
      
       
        
        }
       
        const columns = [
          {
            name: "mes",
            label: "Mes",
           
        },
        {
          name: "anio",
          label: "Año",
         
      },
          
          {
              name: "saldo_inicial",
              label: "Saldo Inicial",
          },
          {
              name: "ICC",
              label: "ICC",
  
          },
          {
              name: "cuota_con_ajuste",
              label: "Cuota con ajuste",
             
          },
          {
            name: "Saldo_real",
            label: "Saldo Real",
           
        },
        {
          name: "Ajuste_ICC",
          label: "Ajuste ICC",
         
      },

  
          
   
  
      ];    
   
    
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

     
       <div>
       <div>
        <MUIDataTable
            title={"Lista de Clientes"}
            data={cuotas}
            columns={columns}
            actions={[
                {
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: (event, rowData) => alert("You saved " + rowData.name)
                }
            ]}
            


        />
    </div>
       </div>
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