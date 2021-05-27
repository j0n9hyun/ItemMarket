import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import '../../static/scss/market.scss';
const Market = () => {
  return (
    <>
      <Helmet>
        <title>쫑마켓 | 장터</title>
      </Helmet>
      <Header />
      <section className='market-list'>
        <div className='market-items'>
          <article className='market-item'>
            title <div>desc</div>
          </article>
          <article className='market-item'>
            title <div>desc</div>
          </article>
          <article className='market-item'>
            title <div>desc</div>
          </article>
          <article className='market-item'>
            title <div>desc</div>
          </article>
          <article className='market-item'>
            title <div>desc</div>
          </article>
          <article className='market-item'>
            title <div>desc</div>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Market;
