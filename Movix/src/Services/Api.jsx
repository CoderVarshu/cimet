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
                ...params,
                api_key: API_KEY,
            },
        });

        return data;
    }
    catch(err){
        console.log(err);
        return err;
    }
}

export const imagePreUrl = "https://image.tmdb.org/t/p/" + "original"


export const fetchAllMovie = async(type, sortBy)=>{
    try{
         let url = `${BASE_URL}discover/${type}?language=en-US&sort_by=${sortBy}&page=1&api_key=${API_KEY}`
          let {data} = await axios.get(url)
           return data?.results
    }
    catch(err) {
         console.log(err)
    }
}


export const fetchMedia = async(type, id)=>{
    try{
         let url = `${BASE_URL}${type}/${id}?language=en-US&page=1&api_key=${API_KEY}`
          let {data} = await axios.get(url)
           return data
    }
    catch(err) {
         console.log(err)
    }
}


export const getBySearch = async(term)=>{
    try{
         let url = `${BASE_URL}search/movie?query=${term}&page=1&api_key=${API_KEY}`
          let {data} = await axios.get(url)
           return data
    }
    catch(err) {
         console.log(err)
    }
}

export const getMovieTrailor = async(mediaType,id)=> {

    try{
    let url = `${BASE_URL}${mediaType}/${id}/videos?api_key=${API_KEY}`
    let {data} = await axios.get(url)
    return data
    }
    catch(err){
   console.log(err)
    }
}


export const getPopular = async(mediaType)=> {

    try{
    let url = `${BASE_URL}${mediaType}/popular?language=en-US&page=1&api_key=${API_KEY}`
    let {data} = await axios.get(url)
    return data
    }
    catch(err){
   console.log(err)
    }
}

export const getTopRated = async(mediaType)=> {

    try{
    let url = `${BASE_URL}${mediaType}/top_rated?language=en-US&page=1&api_key=${API_KEY}`
    let {data} = await axios.get(url)
    return data
    }
    catch(err){
   console.log(err)
    }
}

