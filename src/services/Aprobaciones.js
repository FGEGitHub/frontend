
import axios from 'axios'
const  baseUrl = 'http://localhost:4000/aprobaciones/'

const lista= async  () => {
   
    const {data } = await axios.get(baseUrl+'pendientestodas')
    console.log(data)
    return data 
}   

const cantidad= async  () => {
   
  const {data } = await axios.get(baseUrl+'pendientestodas')
  console.log(data)
  return data 
} 

const aprobacion= async  (id) => {
   console.log(id)
  const {data } = await axios.get(baseUrl+'aprobar/'+id)
    console.log(data)
 
}   

const rechazo= async  (id) => {

  console.log(id)
 // const {data } = await axios.get(baseUrl+'rechazarr/'+id)
  
 
} 

export default {lista, aprobacion,rechazo};