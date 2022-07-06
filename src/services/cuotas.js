import axios from 'axios'
const  baseUrl = '3.92.223.19:4000/cuotas/lote2/'

const vercuotas= async  (id) => {
    console.log('servicio')
   console.log(id)
    const {data } = await axios.get(baseUrl+id)
    console.log(data)
    
    return data 
}  
const cuotasDeUnLote = async  (id) => {
    
   console.log(id)
    const data  = await axios.get('3.92.223.19:4000/cuotas/cuotasdeunlote/'+id)
    console.log(data)
    
    return data 
} 


const agregarCuotas= async  (estadoCuotas) => {
  
   console.log(estadoCuotas)
    const {data } = await axios.post('3.92.223.19:4000/cuotas/addaut2/',estadoCuotas)
    console.log(data)
    
   // return data 
}  

export default {vercuotas,agregarCuotas, cuotasDeUnLote};