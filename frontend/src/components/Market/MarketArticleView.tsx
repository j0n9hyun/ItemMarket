import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import { MarketListType } from '../types/marketTypes';

const MarketArticleView = ({ marketInfo, marketOthers, onClickMore }: any) => {
  const history = useHistory();
  return (
    <>
      <Helmet>
        <title>쫑마켓 | {marketInfo?.title ? marketInfo?.title : ''} </title>
      </Helmet>
      <Header />
      <div className='market-info-wrapper'>
        {marketInfo ? (
          <>
            <div className='market-info'>
              <div className='market-img-wrapper'>
                <img
                  className='market-img'
                  src={marketInfo.url}
                  alt='이미지 없음'
                />
              </div>
              <section className='market-info-contents'>
                <div className='market-info-title'>{marketInfo.title}</div>
                <div
                  onClick={() => {
                    history.push(`/user/${marketInfo.name}`);
                  }}
                >
                  {marketInfo.name}님의 게시글
                </div>
                <div className='market-info-price'>
                  {marketInfo.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                  원
                </div>
                <div className='market-info-content'>{marketInfo.content}</div>
              </section>
              <section className='market-info-others'>
                <div className='market-info-others-title'>
                  최신 게시글
                  <div
                    className='market-info-others-more'
                    onClick={onClickMore}
                  >
                    더 찾아보기
                  </div>
                </div>

                <div className='market-items other'>
                  {marketOthers.map(
                    (
                      { id, title, content, url, price }: MarketListType,
                      idx: any
                    ) => (
                      <>
                        {idx <= 7 && (
                          <article
                            className='market-item'
                            onClick={() => {
                              window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                              });
                              history.push(`/market/${id}`);
                            }}
                          >
                            <img
                              className='market-cover'
                              src={url}
                              alt={title}
                            />
                            <div className='market-title'>{title}</div>
                            <div className='market-description'>{content}</div>
                            <div className='market-price'>
                              {price
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                              원
                            </div>
                          </article>
                        )}
                      </>
                    )
                  )}
                </div>
              </section>
            </div>
          </>
        ) : (
          <div>존재하지 않는 게시글입니다.</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MarketArticleView;
