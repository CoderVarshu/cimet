/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react'
import { getMovieTrailor } from '../../services/Api'

const IFrame = ({mediaType, id}) => {

  const [trailor, setTrailor] = useState([])

  const getTrailor = async()=>{
   const data = await getMovieTrailor(mediaType, id)
    const trailorObj = data?.results.find(item => item.type === 'Trailer')
     setTrailor(trailorObj)
  }

   useEffect(()=>{
    getTrailor()
   }, [mediaType, id])

  return (
    <div className='iframeWrapper'>
      IFrame
      <iframe
       width="560" 
      height="315" 
      src={`https://www.youtube.com/embed/${trailor?.key}`} 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>

      </iframe>

    </div>
  )
}

export default IFrame