import axios from 'axios'
const baseUrl = 'http://localhost:4000/prueba'
let token = null

const setToken = newToken =>{
    console.log(newToken)
    token = `Bearer ${newToken}`
}

const usuarios = async () => {
    console.log(token)
   const config = {
        headers:{
            Authorization:token
        }
    }
    const request = await axios.get(baseUrl, config)
    let dataa = request.data
   

    return dataa
     
}
export default { usuarios, setToken }