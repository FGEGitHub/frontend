import axios from 'axios'
const  baseUrl = 'http://localhost:4000/'

const pagar= async  (pago) => {
   console.log(pago.pago)

  const {data } = await axios.post(baseUrl+'usuario1/realizarr',(pago.pago))
    
  
}  


const pagosinusuales= async  () => {
  

 const {data } = await axios.get(baseUrl+'pagos/listainusual',)
   
 return data
}  

export default { pagar,pagosinusuales};