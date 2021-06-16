import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { challengesSelector } from '../../atoms/marketState';
import Footer from '../../Home/Footer';
import Header from '../../Home/Header';
import { MarketListType } from '../../types/marketTypes';
import UserArticleView from './UserArticleVIew';

const UserArticle = () => {
  const { id } = useParams<{ id: string }>();
  const marketList = useRecoilValue(challengesSelector);
  const marketUserInfo = marketList.filter(
    (v: MarketListType) => v.name === id
  );

  return (
    <>
      <Header />
      <UserArticleView marketUserInfo={marketUserInfo} />;
      <Footer />
    </>
  );
};

export default UserArticle;
