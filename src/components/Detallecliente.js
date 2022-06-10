import { useParams } from "react-router-dom"
import LotesCliente from './LotesCliente'
const DetalleCliente =() => {
    let params = useParams()
    let cuil_cuit = params.cuil_cuit
   


    return (
    <div>
   {    <LotesCliente 
    cuil_cuit={cuil_cuit}
    /> }
    </div>
    )
}
export default DetalleCliente