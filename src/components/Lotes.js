import { useState, useEffect } from "react";

import MUIDataTable from "mui-datatables";
import servicioClientes from '../services/lotes'

const Lotes = () => {
    //configuracion de Hooks
    const [clients, setClients] = useState([]);

 


    const getClients = async () => {
        
     const  clients = await servicioClientes.lista({
      
      })
      setClients(clients)}

    useEffect(() => {
        getClients()
    }, [])
    
    // definimos las columnas
    const columns = [
        {
            name: "zona",
            label: "Zona",
        },
        {
            name: "fraccion",
            label: "Fraccion",
            
            
        },
        {
            name: "manzana",
            label: "Manzana",
            
        },
        {
            name: "lote",
            label: "Lote",
        },
        {
            name: "parcela",
            label: "Parcela",
        },
         {
            name: "nombre_razon",
            label: "Nombre/Razon",
        },
        {
            name: "cuil_cuit",
            label: "Cuil/Cuit",
        },
       
    ];
    // renderiza la data table
            return (
                <MUIDataTable
                    title={"Lista de Clientes"}
                    data={clients}
                    columns={columns}
                    />
            )
    }

    export default Lotes;