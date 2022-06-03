
import axios from 'axios'
const  baseUrl = 'http://localhost:4000/prueba'

const lista= async  () => {
   
    const {data } = await axios.get(baseUrl)
    
    return data 
}   

export default {lista};