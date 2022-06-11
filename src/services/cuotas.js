import axios from 'axios'
const  baseUrl = 'http://localhost:4000/cuotas/lote/'

const vercuotas= async  (id) => {
    console.log('servicio')
   console.log(id)
    const {data } = await axios.get(baseUrl+id)
    console.log(data)
    
    return data 
}  
export default {vercuotas};