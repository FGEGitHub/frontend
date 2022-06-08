import { useState, useEffect } from "react";

import MUIDataTable from "mui-datatables";
import servicioClientes from '../services/clientes'
import { Navigate } from "react-router-dom";

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
            name: "id",
            label: "ID",
        },
        {
            name: "cuil_cuit",
            label: "Cuil/cuit",
        },
        {
            name: "Nombre",
            label: "Nombre",
            
        },
        {
            name: "domicilio",
            label: "Domicilio",
        },
        
       
    ];
    // renderiza la data table
            return (
                <div>
                <MUIDataTable
                    title={"Lista de Clientes"}
                    data={clients}
                    columns={columns}
                    actions={[
                        {
                        label: "Domicilio",
                        icon: 'edit',
                        tooltip:'Acceder al cliente',
                        onClick:(event,rowData)=>alert()
                    }]

                    }
                    options={{
                        actionsColumnIndex: -1
                    }}
                    />
                    </div>
            )
    }

    export default Lotes;