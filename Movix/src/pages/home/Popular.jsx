import React, { useEffect, useState } from 'react'
import ContentWrapper from '../../components/contentWrapper/contentWrapper'
import SwitchTab from '../../components/common/SwitchTab'
import './style.scss';
import Carousel from '../../components/common/carousel/Carousel';
import useFetchActions from '../../services/Actions';

const Popular = () => {

  const [filter, setFilter ] = useState('day')
  const [trendingData, setTrendingData] = useState([])

const {data, loading} = useFetchActions(`trending/all/${filter}`, {language : "en-US" , page :1})

  useEffect(()=>{
     setTrendingData(data?.results)
  }, [data])

  const onTabChange=(tab)=>{
    setFilter(tab === "Movies" ? "movies" : 'tv' )
}


  return (
    <div className="carouselSection">
       <ContentWrapper>
          <span className="carouselTitle">
            What's Popular
          </span>
        <SwitchTab data = {["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </ContentWrapper> 
        <Carousel data={trendingData} loading={loading} />
    </div>
  )
}

export default Popular