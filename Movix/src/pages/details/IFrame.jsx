import React, { useEffect, useState } from 'react'
import { getMovieTrailor } from '../../services/Api'

const IFrame = ({mediaType, id}) => {

  const [trailor, setTrailor] = useState([])

  const getTrailor = async()=>{
   const data = await getMovieTrailor(mediaType, id)
    const trailorObj = data?.results.find(item => item.type === 'Trailer')
     setTrailor(trailorObj)
     console.log("TRAILOR", trailorObj )
  }

   useEffect(()=>{
    getTrailor()
   }, [mediaType, id])

  return (
    <div className='iframeWrapper'>
      IFrame
      {console.log("TRAILOR22" , trailor)}
      <iframe
       width="560" 
      height="315" 
      src={`https://www.youtube.com/embed/${trailor?.key}`} 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>

      </iframe>

    </div>
  )
}

export default IFrame