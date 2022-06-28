import axios from 'axios'
const  baseUrl = 'http://localhost:4000/usuario1/'

const subirprueba= async  (formdata) => {
    const {data } = await axios.post(baseUrl+'subirlegajoprueba',formdata)
   
}  
 

export default {subirprueba};