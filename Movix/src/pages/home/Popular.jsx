import { useEffect, useState } from "react";
import ContentWrapper from "../../components/contentWrapper/contentWrapper";
import SwitchTab from "../../components/common/SwitchTab";
import "./style.scss";
import Carousel from "../../components/common/carousel/Carousel";
import { getPopular } from "../../services/Api";

const Popular = () => {
  const [filter, setFilter] = useState("movie");
  const [popularData, setPopularData] = useState([]);

  
  const getPopularShow = async()=>{
    const data = await getPopular(filter)
    setPopularData(data?.results);
    
  }

  useEffect(() => {

 getPopularShow()

  }, [filter]);

  const onTabChange = (tab) => {
    setFilter(tab === "Movie" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What&apos;s Popular</span>
        <SwitchTab data={["Movie", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={popularData} media={filter} />
    </div>
  );
};

export default Popular;
