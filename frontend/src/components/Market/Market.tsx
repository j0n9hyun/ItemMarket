import { Helmet } from 'react-helmet-async';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import '../../static/scss/market.scss';
import MarketItems from './MarketItems';
const Market = () => {
  return (
    <>
      <Helmet>
        <title>쫑마켓 | 장터</title>
      </Helmet>
      <Header />
      <MarketItems />
      <Footer />
    </>
  );
};

export default Market;
