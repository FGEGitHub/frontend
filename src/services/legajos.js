import axios from 'axios'
const baseUrl = '3.92.223.19:4000/usuario1/'

const subirprueba = async (formdata) => {
  console.log(formdata)
  const { data } = await axios.post(baseUrl + 'subirlegajoprueba', formdata)
  console.log(data)

}

const subirlegajode = async ( formdata) => {
 

  console.log(formdata)
  await axios.post('3.92.223.19:4000/links/subirlegajodni', formdata)

  
  



}


export default { subirprueba, subirlegajode };