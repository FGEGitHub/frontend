import axios from 'axios'
const  baseUrl = 'http://3.92.223.19:4000/nivel3/'

const agregariccgral= async  (datos) => {
   
    const {data } = await axios.post(baseUrl+'agregariccgral2',datos)
    alert(data)
   
}  
const traerhistorial= async  () => {
   
    const {data } =await axios.get('http://3.92.223.19:8080/nivel3/historialicc')

    return data 
}  

export default {agregariccgral,traerhistorial};