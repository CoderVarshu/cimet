import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMedia, imagePreUrl } from '../../services/Api'
import './style.scss';
import ContentWrapper from '../../components/contentWrapper/contentWrapper';
import Ratings from '../../components/common/ratings/Ratings';
import dayjs from 'dayjs';
import { AiOutlinePlayCircle } from "react-icons/ai";
import Modal from 'react-modal';
import IFrame from './IFrame';

const Details = () => {

  const { mediaType, id } = useParams()
  const [mediaDetails, setMediaDetails] = useState([])
  const [modalIsOpen, setIsOpen] =  useState(false);

  const getMediaDetails = async () => {
    const details = await fetchMedia(mediaType, id)
    setMediaDetails(details)
  }

  useEffect(() => {
    getMediaDetails()
  }, [mediaType, id])


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  

  const handleTrailor=()=>{
      setIsOpen(true)
  }
    

  function App() {
    let subtitle;
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      // subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <IFrame />
        </Modal>
      </div>
    );
  }

  return (
    <>
      <div className='opacity-layer'></div>
      <ContentWrapper>
        <div className='detailsWrapper'>
          <div className='detailsImage' >
            <img
              width={350}
              height={500}
              className='detailsImage'
              src={imagePreUrl + mediaDetails.poster_path}
            />
          </div>
          <div>
            <div className='detailsCard'>
              <ul className="details">
                <li className="title">{mediaDetails?.title || mediaDetails?.original_name}
                  {" "}
                  {mediaDetails?.release_date
                    ? ("(" + dayjs(mediaDetails.release_date).format("YYYY") + ")")
                    : ("(" + dayjs(mediaDetails?.first_air_date).format("YYYY") + ")")}</li>
                <li className="tagline">{mediaDetails?.tagline}</li>
                <li className="detailsInfo">
                {mediaDetails?.vote_average !==0 ? <Ratings rating={mediaDetails?.vote_average} />
                  :''}
                  <span className='text' onClick={()=>{
                    handleTrailor()
                  }}>
                    <AiOutlinePlayCircle size={80} className='playIcon' />
                    Watch Trailer </span>
                </li>
                <div style={{ fontSize: '24px', marginBottom: '10px' }}>
                  Overview
                </div>
                <li className="overView">{mediaDetails.overview}</li>
              </ul>
            </div>
            <div style={{ marginTop: '40px' }}>
              <ui className="otherDetails">
                <li className='list'>
                  <span className='text-bold'>
                    Status:
                  </span>
                  <span className='text'>
                    {mediaDetails?.status}
                  </span>
                </li>
                <li className='list'>
                <span className='text-bold'>
                Director:
                </span>
                <span className='text'>
                Ricardo Carreira, Edgard Miranda, Letícia Veiga
                 </span>
                 </li>
                 <li className='list'>
                <span className='text-bold'>
                Creator:
                </span>
                <span className='text'>
                Maria João Costa
                 </span>
                 </li>
              </ui>
            </div>
          </div>
            {App()}
        </div>
      </ContentWrapper>
    </>
  )
}

export default Details