import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './style.scss';


const Home = () => {
  return (
  <>
   <Header />
   {/* <div>helo</div> */}
   <Outlet/>
   <Footer />
  </>
)
}

export default Home