
import axios from 'axios'
const  baseUrl = 'http://localhost:4000/prueba'

const lista= async  () => {
   
    const {data } = await axios.get(baseUrl)
    
    return data 
}   

const cliente= async  (cuil_cuit) => {
   
    const {data } = await axios.get('http://localhost:4000/links/detalle/'+cuil_cuit)
    
    return data 
} 

const determinarIngreso= async  (datos) => {
   console.log(datos)
  const {data } = await axios.post('http://localhost:4000/links/agregaringreso2/',datos)
    console.log(data)
    alert('Guardado con exito')
    return data 
} 

export default {lista, cliente, determinarIngreso};
