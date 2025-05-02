import { useLocation, useParams } from 'react-router-dom';
import Header from './Header';
import HomeHeader from './HomeHeader';

const TheHeader = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return isHome ? <HomeHeader /> : <Header />;
};
export default TheHeader;
