import axios from "axios"


export const fetchApi = async(url) =>{
   
    const response = await axios.get(url)
     return response.data
}