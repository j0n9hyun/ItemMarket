import React from 'react';
import { useHistory } from 'react-router';
import { useRecoilValue } from 'recoil';
import { challengesSelector } from '../atoms/marketState';
import { MarketList } from '../types/marketTypes';

const MarketItems = () => {
  const history = useHistory();
  const marketList = useRecoilValue(challengesSelector);

  return (
    <section className='market-list'>
      <div className='market-items'>
        {marketList.map(({ id, title, content, url, price }: MarketList) => (
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
              {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MarketItems;
