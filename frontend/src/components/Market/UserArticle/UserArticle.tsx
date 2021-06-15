import { useRecoilValue } from 'recoil';
import { challengesSelector } from '../../atoms/marketState';
import UserArticleView from './UserArticleVIew';

const UserArticle = () => {
  const marketList = useRecoilValue(challengesSelector);
  console.log(marketList);

  return <UserArticleView marketList={marketList} />;
};

export default UserArticle;
