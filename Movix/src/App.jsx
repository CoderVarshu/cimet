import { useEffect } from "react"
import { fetchDataFromApi } from "./Services/Api"
import { useDispatch, useSelector } from "react-redux"
import { getApiConfiguration } from "./Store/homeSlice"

function App() {

 const dispatch = useDispatch()
 const url = useSelector((state)=>{
   state.home
 })

 console.log("URL", url)

useEffect(()=>{
 fetchData()
 console.log("URL", url)

}, [])

const fetchData = () => {
  fetchDataFromApi('movie/popular', { language: 'en-US', page: 10 })
    .then((res) => {
      console.log("Movie", res);
      
      // Dispatch the action after getting the response
      dispatch(getApiConfiguration(res));

      // If dispatch does not return a promise, no need to chain another .then() here
    })
    .catch((err) => {
      console.error("Error fetching data", err);
    });
};


  return (
    <>
     {/* {url?.total_pages} */}
    </>
  )
}

export default App
