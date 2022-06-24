import React, { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom"
import LotesCliente from './LotesCliente'
import InfoCliente from './Infocliente'

import servicioCliente from '../services/clientes'


const DetalleCliente = () => {
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
    const [cliente, setCliente] = useState([])

    useEffect(() => {

        traer()

    }, [])
    const traer = async () => {

        const cliente = await servicioCliente.cliente(cuil_cuit)
        console.log(cliente)
        setCliente(cliente)



            ;
    };
    const declarar = async () => {



    }
    return (
        <div>
  {/*  <InfoCliente/> */}

         
            {<LotesCliente
                cuil_cuit={cuil_cuit} />}

        </div>
    )
}
export default DetalleCliente