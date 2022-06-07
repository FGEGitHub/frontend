
import axios from 'axios'
const  baseUrl = 'http://localhost:4000/lotes/listadetodos'

const lotes = async  () => {
   
    const {data } = await axios.get(baseUrl)
    
    return data 
}   

export default {lotes};