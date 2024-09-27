import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchAllMovie, imagePreUrl } from '../../services/Api'
import './style.scss';
import dayjs from 'dayjs';
import Ratings from '../../components/common/ratings/Ratings';
import deafultImg from '../../assets/default-image.avif'

const Explore = () => {

  const { mediaType } = useParams()
  const navigate = useNavigate()
  const [exploreData, setExploreData] = useState([])


  const getMovies = async (mediaType) => {
    const movies = await fetchAllMovie(mediaType);
    setExploreData(movies)
  };

  useEffect(() => {
    if(mediaType ==='movie' || mediaType === 'tv') getMovies(mediaType)
      else navigate('/')
  }, [mediaType])

  return (
    <div>
      <div className='movie-card'>
        {exploreData?.map((item, i) => (
          <div key={i} className='card-item' onClick={()=>{
             navigate(`/explore/${mediaType}/${item.id}`)
          }} >
            <div className='posterBlock'>
            <img
              src= {  item?.poster_path ? imagePreUrl + item?.poster_path : deafultImg }
              width={200}
              height={200}
            />
            <Ratings rating={item.vote_average.toFixed(1)}/>
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
    </div>
  )
}

export default Explore