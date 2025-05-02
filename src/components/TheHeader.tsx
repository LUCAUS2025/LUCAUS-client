import { useLocation } from 'react-router-dom';
import Header from './headers/Header';
import HomeHeader from './headers/HomeHeader';

const TheHeader = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return isHome ? <HomeHeader /> : <Header />;
};
export default TheHeader;
