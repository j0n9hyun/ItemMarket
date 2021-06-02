import { useRecoilValue } from 'recoil';
import { challengesSelector } from '../atoms/marketState';
import MarketItemsView from './MarketItemsView';

const MarketItems = () => {
  const marketList = useRecoilValue(challengesSelector);

  return <MarketItemsView marketList={marketList} />;
};

export default MarketItems;
