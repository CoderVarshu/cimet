/* eslint-disable react/prop-types */
import backImg from "./imges/defaultImage.jpg";
import './style.css'

const View = ({ data, handleFlip, disabled }) => {


  const handleClick = () => {
    if(!disabled){
   handleFlip(data)
    }
  }

  return (
    <div className="card">
      <div className={data.matches ? 'flipped' : "" } >
        <img
          className="front"
          src={data.image}
          height={100}
          width={100}
          style={{ objectFit: 'contain' }}
        />
        <img
          className="back"
          onClick={handleClick}
          src={backImg}
          height={100}
          width={100}
        />
      </div>
    </div>
  )
}

export default View