import './style.scss'
import logo from '../../assets/movix-logo.svg'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ContentWrapper from '../contentWrapper/contentWrapper';
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {

  const [show, setShow] = useState("top")
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [input, setInput] = useState("")
  const [showSearch, setShowSearch] = useState("")
  const navigate = useNavigate();
  const location = useLocation();

  const openSearch = () => {
    setMobileMenu(false)
    setShowSearch(true)
  }

  const openMobileMenu = () => {
    setMobileMenu(true)
    setShowSearch(false)
  }

  const searchQueryHandler = (e) => {
    if (e.key === 'Enter' && input.length > 0) {
      navigate(`/search/${input}`)
      setTimeout(() => {
        setShowSearch(false)
      }, 1000)
    }
  }

  return (
    <header className={`header ${mobileMenu ? "mobileView" : " "} ${show}`
    }>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt='' />
        </div>
        <ul className="menuItems">
          <li className="menuItem">Movies</li>
          <li className="menuItem">TV Shows</li>
          <li className="menuItem">
            <HiOutlineSearch  onClick={openSearch} />
          </li>
        </ul>
        <div className='mobileMenuItems'>
          <HiOutlineSearch  />
          {mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)} /> : <SlMenu onClick={openMobileMenu} />}
        </div>
      </ContentWrapper>
      {showSearch &&
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
      </div>}
    </header>
  )
}

export default Header