import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { challengesSelector } from '../atoms/marketState';
import { MarketListType } from '../types/marketTypes';
import MarketArticleView from './MarketArticleView';

const MarketArticle = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const onClickMore = () => {
    history.push('/market');
  };
  const marketList = useRecoilValue(challengesSelector);
  const marketInfo = marketList
    .filter((v: MarketListType) => v.id === +id)
    .find((r: MarketListType) => r);
  const marketOthers = marketList.filter((v: MarketListType) => v.id !== +id);
  const props = {
    marketInfo,
    marketOthers,
    onClickMore,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MarketArticleView {...props} />
    </>
  );
};

export default MarketArticle;
