import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { useNavigate } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'

import servicionivel3 from '../../services/nivel3'


//import overbookingData from "./overbooking";

const Historial = () => {
    //configuracion de Hooks
    const [historial, setHistorial] = useState([]);
    const navigate = useNavigate();


    
const traer = async() => {
       
    const historial = servicionivel3.traerhistorial()
    console.log(historial)
    setHistorial(historial)
    
    };  
    

    useEffect(() => {
        traer()
    }, [])
    ///



    function CutomButtonsRenderer(dataIndex, rowIndex, data, onClick) {
        return (
          <>
            <EditIcon
              onClick={() => onClick(data[dataIndex].id, dataIndex)}
              style={{ marginRight: "10px", cursor: "pointer" }}
            />
            <SearchIcon style={{ cursor: "pointer" }} 
            onClick={() =>  navigate('/usuario2/detallecliente/'+historial[dataIndex].cuil_cuit)  }//Navigate('usuario2/detallecliente'+clients[dataIndex].cuil_cuit)
            />
          </>
        );
      }
    // definimos las columnas
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
            name: "valor",
            label: "Valor",

        },
       
        
        {
            name: "Actions",
            options: {
                customBodyRenderLite: (dataIndex, rowIndex) =>
                    CutomButtonsRenderer(
                        dataIndex,
                        rowIndex,
                       // overbookingData,
                       // handleEditOpen
                    )
            }
        
        },   
 

    ];

const options = {

    /*    rowsPerPage: 10,
       download: false, // hide csv download option
       onTableInit: this.handleTableInit,
       onTableChange: this.handleTableChange, */
};
// renderiza la data table
return (
    <div>
        <MUIDataTable
        
            title={"Historial de ICC"}
            data={historial}
            columns={columns}
            actions={[
                {
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: (event, rowData) => alert("You saved " + rowData.name)
                }
            ]}
            options={options}


        />
    </div>
)
}

export default Historial;