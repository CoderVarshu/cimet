import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/'

const API_KEY = import.meta.env.VITE_APP_KEY;

const headers = {
    accept: 'application/json',
};

export const fetchDataFromApi = async(url, params) =>{
    try{
        
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params: {
                api_key: API_KEY, // Include the API key as a query parameter
                ...params,
            },
        });

        return data;
    }
    catch(err){
        console.log(err);
        return err;
    }
}