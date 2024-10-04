import FeaturedProducts from "../components/FeaturedProducts"
import Slider from "../components/Slider"

const Home = () => {
  
 

  return (
    <div className="flex flex-col">
        <Slider/>
        <FeaturedProducts />
    </div>
  )
}

export default Home