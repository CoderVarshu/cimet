import { useEffect, useState } from "react"
import SwitchTab from "../../components/common/switchTab"
import ContentWrapper from "../../components/contentWrapper/contentWrapper"
import FetchActions from "../../services/Actions"
import Carousel from "../../components/common/carousel/Carousel"

const Tranding = () => {

    const [filter, setFilter ] = useState('day')
    const [trendingData, setTrendingData] = useState([])

const {data, loading} = FetchActions(`trending/all/${filter}`, {language : "en-US" , page :1})

    useEffect(()=>{
       setTrendingData(data?.results)
    }, [data])
  
    const onTabChange=(tab)=>{
        setFilter(tab === "Week" ? "week" : 'day' )
       console.log(tab,"Hii")
    }

  return (
    <div className="carouselSection">
       <ContentWrapper>
          <span className="carouselTitle">
            Trending
          </span>
        <SwitchTab data = {["Day", "Week"]} onTabChange={onTabChange} />
        </ContentWrapper> 
        <Carousel data={trendingData} loading={loading} />
    </div>
  )
}

export default Tranding