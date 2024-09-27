import { useEffect, useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import useFetchActions from '../../../services/Actions'
import { imagePreUrl } from '../../../services/Api'
import MyImage from '../../../LazyLoadingImage/Image'
import ContentWrapper from '../../../components/contentWrapper/contentWrapper'
import defaultPoster from '../../../assets/default-poster.jfif'
// src\assets\default-poster2.jfif
function Banner() {

  const navigate = useNavigate()

  const [input, setInput] = useState('')
  const [background, setBackground] = useState('')

  const { data, loading } = useFetchActions('movie/upcoming', {})

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 20);
    const backdropPath = data?.results?.[randomIndex]?.backdrop_path;
    const bg = backdropPath ? imagePreUrl + backdropPath : defaultPoster;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === 'Enter' && input.length > 0) {
      navigate(`/search/${input}`)
    }
  }

  return (
    <div className="banner">
      <div className="backdrop-img">
        <MyImage
          src={background }
          alt={"Random-Background"}
        />
      </div>
      <div className="opacity-layer"></div>
      <ContentWrapper>
          <div className="banner-content">
            <span className="title">
              Welcome
            </span>
            <span className="sub-title">
              Millions of movies, TV shows and people to discover. Explore now.
            </span>
            <div className="searchInput">
              <input
                type="text"
                placeholder='Search For a movie or TV show...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyUp={searchQueryHandler}
                // className='searchInput'
              />
              <button className='search-btn'>Search</button>
            </div>
          </div>
      </ContentWrapper>

    </div>
  )
}

export default Banner