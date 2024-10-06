/* eslint-disable react/prop-types */
import './carouselStyle.css';


const ImagesCard = ({images}) => {
  return (
    <div className="flex justify-center items-center h-[400px] w-full flex-shrink-0">
    <img 
      src={images?.urls?.regular}
      className="object-cover max-w-full max-h-full"
    />
    </div>
  )
}

export default ImagesCard;