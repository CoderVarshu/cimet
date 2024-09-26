import { useEffect, useState } from "react"
import { fetchDataFromApi } from "./Api"

const FetchActions = (url, params) => {
   
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
     
        setLoading(true)
        setData(null)
        setError(null)

        fetchDataFromApi(url,params)
        .then((res)=>{
            setLoading(false);
            setData(res)
        })
        .catch((err)=>{
            setLoading(false)
            setError("Something Went Wrong!", err)
        })

    }, [url])

    return {data, loading, error}
}

export default FetchActions