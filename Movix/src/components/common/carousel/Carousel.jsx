/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import "./style.scss";
import ContentWrapper from "../../contentWrapper/contentWrapper";
import { imagePreUrl } from "../../../services/Api";
import MyImage from "../../../LazyLoadingImage/Image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const Carousel = ({ data, loading }) => {
  const navigate = useNavigate();
  const containerRef = useRef();

  useEffect(() => {
    console.log("Data", data);
  }, [data]);

  const navigation = (dir) => {
    const container = containerRef.current;

    const scroll =
      dir === "left"
        ? container.scrollLeft + (container.offSetWidth + 20)
        : container.scrollLeft - (container.offSetWidth + 20);

    container.scrollTo({
      left: scroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowRightCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("right")}
        />
        <BsFillArrowLeftCircleFill
          className="carouselRightNav arrow"
          onClick={() => navigation("left")}
        />
        {!loading ? (
          <div ref={containerRef} className="carouselItems">
            {data?.map((item) => {
              return (
                <div key={item.id} className="carouselItem"
                  onClick={()=> navigate(`/${item.media_type}/${item.id}`)}
                >
                  <div className="posterBlock">
                    <MyImage src={imagePreUrl + item?.poster_path} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="title">
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
