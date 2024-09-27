/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import "./style.scss";
import ContentWrapper from "../../contentWrapper/contentWrapper";
import { imagePreUrl } from "../../../services/Api";
import MyImage from "../../../LazyLoadingImage/Image";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Ratings from "../ratings/Ratings";
import defaultImg from '../../../assets/default-image.avif';



const Carousel = ({ data, loading }) => {
  const navigate = useNavigate();
  const containerRef = useRef();

  useEffect(() => {
    // console.log("Data", data);
  }, [data]);



  return (
    <div className="carousel">
      <ContentWrapper>
        {!loading ? (
          <div className="carouselItems">
            {data?.map((item) => {
              return (
                <div key={item.id} className="carouselItem" onClick={() => navigate(`/explore/${item.media_type}/${item.id}`)}>
                  <div className="posterBlock">
                    <MyImage src={item?.poster_path ? imagePreUrl + item?.poster_path : defaultImg } />
                    <Ratings rating={item.vote_average.toFixed(1)} />
                  </div>
                  <div className="textBlock">
                    <span className="title">
                      {(item.title || item.name)?.length > 22
                        ? `${(item.title || item.name).substring(0, 20)}...`
                        : item.title || item.name}
                    </span>
                    <span className="date">
                      {item?.release_date
                        ? dayjs(item.release_date).format("MMM D, YYYY")
                        : "Jan 22, 2022"}
                    </span>
                  </div>
                  
                </div>
              );
            })}
          </div>
        ) : (
          <span> ...Loading</span>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
