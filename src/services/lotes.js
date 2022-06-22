
import axios from 'axios'
const  baseUrl = 'http://localhost:4000/lotes/listadetodos'

const lista= async  () => {
   
    const {data } = await axios.get(baseUrl)
    
    return data 
}  

const lotesCliente= async  (cuil_cuit) => {
 //  console.log(cuil_cuit)
    let {data}  = await axios.get('http://localhost:4000/lotes/lotescliente/'+cuil_cuit)
    console.log(cuil_cuit)
    const lotes=(data[0])
    console.log(data)
   
   
    return data
}  


const lotesCliente2= async  (cuil_cuit) => {
    //  console.log(cuil_cuit)
       let {data}  = await axios.get('http://localhost:4000/lotes/lotescliente2/'+cuil_cuit)
       console.log(cuil_cuit)
       const lotes=(data[0])
       console.log(data)
      
      
       return data
   }  
export default {lista, lotesCliente,lotesCliente2};