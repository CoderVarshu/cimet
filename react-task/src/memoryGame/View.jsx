
const View = ({ data, flippedArr,id, handleFlip }) => {
  
    let show = flippedArr.find((item)=> item === id)

    

    return (
        <div className="flip-card"
            onClick={()=>handleFlip(id)}>
            <div className={`flip-card-inner ${show ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <img src={data.image} alt="Avatar" width={100} height={100} />
                </div>
                <div className="flip-card-back">
                    <h1>?</h1>
                </div>
            </div>
        </div>
    )
}

export default View