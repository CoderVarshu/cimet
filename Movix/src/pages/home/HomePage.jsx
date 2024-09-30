import Banner from './banner/Banner'
import Popular from './Popular'
import TopRated from './TopRated'
import Tranding from './Tranding'
const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <Tranding />
      <Popular />
      <TopRated />
    </div>
  )
}

export default HomePage