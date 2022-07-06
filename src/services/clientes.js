
import axios from 'axios'
const  baseUrl = '3.92.223.19:4000/prueba'


const crear= async  (datos) => {
   console.log(datos)
    const {data } = await axios.post('3.92.223.19:4000/links/add2',datos)
    
    alert(data)  
}  

const lista= async  () => {
   
    const {data } = await axios.get(baseUrl)

    
    return data 
}   
//crear
const crearCliente= async  (datos) => {
   
     const data  = await axios.post('3.92.223.19:4000/links',datos)
  
     return data 
 } 
 
 const ventaLote= async  (datos) => {
   console.log(datos)
    const data  = await axios.post('3.92.223.19:4000/links/ventalote',datos)
    alert(data.data)
    return data 
} 
const cliente= async  (cuil_cuit) => {
   console.log(cuil_cuit)
    const {data } = await axios.get('3.92.223.19:4000/links/detalle/'+cuil_cuit)
    
    return data 
} 

const determinarIngreso= async  (datos) => {
   console.log(datos)
  const {data } = await axios.post('3.92.223.19:4000/links/agregaringreso2/',datos)
    console.log(data)
    alert('Guardado con exito')
    return data 
}

const traerLejagos= async  (cuil_cuit) => {
   console.log(cuil_cuit)
    const {data } = await axios.get('3.92.223.19:4000/links/legajos/'+cuil_cuit)
    
    return data 
}

export default {lista, cliente, determinarIngreso,crearCliente,ventaLote,traerLejagos,crear};
