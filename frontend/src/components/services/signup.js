import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'

const signup = async (newUser)=>{
    const response = await axios.post(baseUrl,newUser)
    return response.data
}

export default {signup}