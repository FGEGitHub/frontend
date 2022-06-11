import { useParams } from "react-router-dom"
import LotesCliente from './LotesCliente'
import Infocliente from './Infocliente'
const DetalleCliente =() => {
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
   


    return (
    <div>
{         <Infocliente 
    cuil_cuit={cuil_cuit}
    /> }
   {    <LotesCliente 
    cuil_cuit={cuil_cuit}
    />
     }
    </div>
    )
}
export default DetalleCliente