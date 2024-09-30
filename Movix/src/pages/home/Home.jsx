import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './style.scss';
import AuthProvider from '../../context/AuthContext';


const Home = () => {
  
  return (
  <>
  <AuthProvider>
   <Header />
   <Outlet/>
   <Footer />
   </AuthProvider>
  </>
)
}

export default Home