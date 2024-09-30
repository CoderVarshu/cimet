import { useEffect, useState } from "react"
import Carousel from "../../components/common/carousel/Carousel"
import SwitchTab from "../../components/common/SwitchTab"
import ContentWrapper from "../../components/contentWrapper/contentWrapper"
import { getTopRated } from "../../services/Api"

const TopRated = () => {
    const [filter, setFilter] = useState('movie')
    const [topRated, setTopRated] = useState([])

    const onTabChange = (tab) => {
        setFilter(tab === "Movie" ? "movie" : "tv");
      };


      const fetchTopRated = async()=>{
        const data = await getTopRated(filter)
        setTopRated(data?.results)  
    }

 useEffect(()=>{
   
    fetchTopRated()

 }, [filter])

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTab data={["Movie", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={topRated} media={filter} />
    </div>
  )
}

export default TopRated