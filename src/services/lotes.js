
import axios from 'axios'
const  baseUrl = 'http://localhost:4000/lotes/listadetodos'

const lista= async  () => {
   
    const {data } = await axios.get(baseUrl)
    
    return data 
}  
const prueba= async  (s) => {
    await axios.post('http://localhost:4000/lotes/prueba',s)
  console.log(s)
    
   
}  
const listalotes= async  () => {
   
    const {data } = await axios.get('http://localhost:4000/lotes/listadelotes')
    
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
export default {lista, lotesCliente,lotesCliente2,listalotes,prueba};