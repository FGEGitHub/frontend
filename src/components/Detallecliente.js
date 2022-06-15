import { useParams } from "react-router-dom"
import LotesCliente from './LotesCliente'
import InfoCliente from './Infocliente'
import * as React from 'react';

import { Modal } from "@mui/material";

const DetalleCliente =() => {
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
   

    const  declarar= async () =>{
     


    }
    return (
    <div>
       

{/* {  <InfoCliente  cuil_cuit={cuil_cuit}/> } */}
    {    <LotesCliente 
    cuil_cuit={cuil_cuit}
    />
     }
   
    </div>
    )
}
export default DetalleCliente