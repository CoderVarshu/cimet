import Banner from './banner/Banner'
import Popular from './Popular'
import Tranding from './Tranding'
const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <Tranding />
      {/* <Popular /> */}
    </div>
  )
}

export default HomePage