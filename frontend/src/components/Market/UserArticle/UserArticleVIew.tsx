import { useHistory } from 'react-router';
import { MarketListType } from '../../types/marketTypes';

const MarketItemsView = ({ marketUserInfo }: any) => {
  const history = useHistory();
  return (
    <section className='market-list'>
      <div className='market-items'>
        {marketUserInfo.map(
          ({ id, title, content, url, price }: MarketListType) => (
            <article
              className='market-item'
              key={id}
              onClick={() => {
                history.push(`/market/${id}`);
              }}
            >
              <img className='market-cover' src={url} alt={title} />
              <div className='market-title'>{title}</div>
              <div className='market-description'>{content}</div>
              <div className='market-price'>
                {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} 원
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default MarketItemsView;
