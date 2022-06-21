import axios from 'axios'
const  baseUrl = 'http://localhost:4000/pagos'

const inusuales= async  () => {
   
    const {data } = await axios.get(baseUrl)
    
    return data 
}  


export default { inusuales};