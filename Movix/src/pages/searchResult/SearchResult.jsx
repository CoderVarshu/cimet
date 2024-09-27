import React, { useEffect, useState } from 'react'
import { getBySearch, imagePreUrl } from '../../services/Api'
import { useLocation, useNavigate } from 'react-router-dom'
import Ratings from '../../components/common/ratings/Ratings'
import dayjs from 'dayjs'
import deafultImg from '../../assets/default-image.avif'

const SearchResult = () => {

  const query = useLocation()
  const navigate = useNavigate()
  const [searchData, setSearchData] = useState([])
  console.log("QUERY", query.pathname.split('/search/')[1]
    )
   const newQuery = decodeURI(query.pathname.split('/search/')[1])

 const getSearch = async() =>{
    const searchData = await getBySearch(newQuery)
    setSearchData(searchData?.results)
    console.log("SearchData", searchData?.results)
 }

   useEffect(()=>{
    getSearch()
   },[query])

  return (
    // <div style={{display:'flex', height:'100vh', alignItems:'center', justifyContent:'center'}}>
      
    //   SearchResult
      
    //   </div>
  
    <div className='movie-card'>
    {searchData?.map((item, i) => (
      <div key={i} className='card-item' onClick={()=>{
         navigate(`/explore/movie/${item.id}`)
      }} >
        <div className='posterBlock'>
        <img
          src= {  item?.poster_path ? imagePreUrl + item?.poster_path : deafultImg }
          width={200}
          height={200}
        />
       {item.vote_average !==0 ?
        <Ratings rating={item.vote_average.toFixed(1)}/>
        :''}
        </div>
        <div className='textBlock'>
          <div className='title' >
          {item.name || item.title}
          </div>
          <div className='date'>
          {item?.release_date
            ? dayjs(item.release_date).format("MMM D, YYYY")
            : "Jan 22, 2022"}
            </div>
            </div>
      </div>

    ))}
  </div>
  
  )
}

export default SearchResult