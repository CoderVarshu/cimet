import './style.scss'
import logo from '../../assets/movix-logo.svg'
import { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import ContentWrapper from '../contentWrapper/contentWrapper';
// import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useLocation } from 'react-router-dom';

const Header = () => {

  const [show, setShow] = useState("top")
  // const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation()
  const navigate = useNavigate();

  const openMobileMenu = () => {
    setMobileMenu(true)
    setShow("top")
  }

useEffect(()=>{
   window.scrollTo(0, 0)
}, [location])

  const handleNavigate =(type) =>{
      if(type === 'movie') navigate('/explore/movie')
      if (type === 'tv') navigate('/explore/tv')
        setMobileMenu(false)
       
  }

  // const controlNavbar = () => {
  //   if (window.scrollY > 200){
  //     if (window.scrollY > lastScrollY && !mobileMenu){
  //       setShow("hide")
  //     }else{
  //       setShow("show")
  //     }
  //   }
  //   else {
  //     setShow("top")
  //   }
  //   setLastScrollY(window.scrollY)
  // }

  // useEffect(()=>{
  //   window.addEventListener("scroll", controlNavbar);
  //   return () => {
  //     window.removeEventListener("scroll", controlNavbar)
  //   }
  // }, [lastScrollY])

  return (
    <header className={`header ${mobileMenu ? "mobileView" : " "} ${show}`
    }>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt='' />
        </div>
        <ul className="menuItems">
          <li className="menuItem" 
            onClick={()=> handleNavigate("movie")}
          >Movies</li>
          <li className="menuItem" 
            onClick={()=> handleNavigate("tv")}
          >TV Shows</li>
          {/* <li className="menuItem">
            <HiOutlineSearch  onClick={openSearch} />
          </li> */}
        </ul>
        <div className='mobileMenuItems'>
          {/* <HiOutlineSearch  /> */}
          {mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu} />}
        </div>
      </ContentWrapper>
      {/* {showSearch &&
      <div className="searchBar">
        <ContentWrapper>
          <div className="searchInput">
            <input
              type="text"
              placeholder='Search For a movie or TV show...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyUp={searchQueryHandler}

            />
            <VscChromeClose onClick={() => setShowSearch(false)} />
          </div>
        </ContentWrapper>
      </div>} */}
    </header>
  )
}

export default Header