
import axios from 'axios'
const  baseUrl = '3.92.223.19:8080/signinn'

const login= async  credentials => {
    const {data } = await axios.post(baseUrl,credentials)
    return data 
}   

const guardar= async  credentials => {
    const {data } = await axios.post(baseUrl,credentials)
    return data 
} 
export default {login, guardar}