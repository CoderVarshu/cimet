import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAllMovie, imagePreUrl } from "../../services/Api";
import "./style.scss";
import dayjs from "dayjs";
import Ratings from "../../components/common/ratings/Ratings";
import deafultImg from "../../assets/default-image.avif";

const Explore = () => {
  const { mediaType } = useParams();
  const navigate = useNavigate();
  const [exploreData, setExploreData] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getMovies = async (mediaType, sort) => {
    const movies = await fetchAllMovie(mediaType, sort);
    if(movies.length === 0){
      setHasMore(false)
    }
    else {

      setExploreData((moviesData)=> [...moviesData, ...movies]);
    }
  };

  useEffect(() => {
    if (mediaType === "movie" || mediaType === "tv")
      getMovies(mediaType, selectedSort);
    else navigate("/");
  }, [mediaType, selectedSort, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        hasMore
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return ()=> window.removeEventListener('scroll', handleScroll)
  }, [hasMore]);

  return (
    <div>
      <select
        className="select"
        onChange={(e) => {
          setSelectedSort(e.target.value);
        }}
      >
        <option value="">Sort By </option>
        <option value="popularity.desc">Popularity Descending</option>
        <option value="popularity.asc">Popularity Ascending</option>
        <option value="Pvote_average.desc">Rating Descending</option>
        <option value="Pvote_average.asc">Rating Ascending</option>
      </select>
      <div className="movie-card">
        {exploreData &&
          exploreData?.map((item, i) => (
            <div
              key={i}
              className="card-item"
              onClick={() => {
                navigate(`/explore/${mediaType}/${item.id}`);
              }}
            >
              <div className="posterBlock">
                <img
                  src={
                    item?.poster_path
                      ? imagePreUrl + item?.poster_path
                      : deafultImg
                  }
                  width={200}
                  height={200}
                />
                <Ratings rating={item.vote_average.toFixed(1)} />
              </div>
              <div className="textBlock">
                <div className="title">
                  {(item.name || item.title).length > 22 ? 
                  `${(item.name || item.title).substring(0, 20)}"...."` : 
                  `${(item.name || item.title)}`
                }
                  
                  </div>
                <div className="date">
                  {item?.release_date
                    ? dayjs(item.release_date).format("MMM D, YYYY")
                    : "Jan 22, 2022"}
                </div>
              </div>
            </div>
          ))}
      </div>
          {hasMore && <div>Loading more...</div>}
    </div>
  );
};

export default Explore;
