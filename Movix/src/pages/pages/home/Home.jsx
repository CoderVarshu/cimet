import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './style.scss';
import {Outlet} from "react-router-dom";


const Home = () => {
  return (
  <>
   <Header />
   <Outlet />
   <Footer />
  </>
)
}

export default Home