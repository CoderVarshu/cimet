import { useEffect, useState } from "react";
import ContentWrapper from "../../components/contentWrapper/contentWrapper";
import useFetchActions from "../../services/Actions";
import Carousel from "../../components/common/carousel/Carousel";
import SwitchTab from "../../components/common/SwitchTab";

const Tranding = () => {
  const [filter, setFilter] = useState("day");
  const [trendingData, setTrendingData] = useState([]);

  const { data, loading } = useFetchActions(`trending/all/${filter}`, {
    language: "en-US",
    page: 1,
  });

  useEffect(() => {
    setTrendingData(data?.results);
  }, [data]);

  const onTabChange = (tab) => {
    setFilter(tab === "Week" ? "week" : "day");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={trendingData} loading={loading} />
    </div>
  );
};

export default Tranding;
