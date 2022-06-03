import { useState, useEffect } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import servicioClientes from '../services/clientes'

const TableAxios = () => {
    //configuracion de Hooks
    const [clients, setClients] = useState([]);

    //funcion para mostrar los clientes con axios
    const endpoint = "https://fakestoreapi.com/users";


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
                <MUIDataTable
                    title={"Lista de Clientes"}
                    data={clients}
                    columns={columns}
                    />
            )
    }

    export default TableAxios;