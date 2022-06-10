import axios from 'axios'
const  baseUrl = 'http://localhost:4000/lotes/'

const vercuotas= async  () => {
   
    const {data } = await axios.get(baseUrl)
    
    return data 
}  
export default {vercuotas};