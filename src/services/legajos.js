import axios from 'axios'
const baseUrl = 'https://3.92.223.19:8000/usuario1/'

const subirprueba = async (formdata) => {
  console.log(formdata)
  const { data } = await axios.post(baseUrl + 'subirlegajoprueba', formdata)
  console.log(data)

}

const subirlegajode = async ( formdata) => {
 

  console.log(formdata)
  await axios.post('https://3.92.223.19:8000/links/subirlegajodni', formdata)

  
  



}


export default { subirprueba, subirlegajode };