import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { challengesSelector } from '../atoms/marketState';
import { MarketList } from '../types/marketTypes';

const MarketArticle = () => {
  const { id } = useParams<any>();
  const marketList = useRecoilValue(challengesSelector);
  const marketInfo = marketList
    .filter((v: any) => v.id === parseInt(id))
    .find((r: MarketList) => r);
  return (
    <>
      <Helmet>
        <title>쫑마켓 | {marketInfo?.title ? null : 'x'} </title>
      </Helmet>
      {marketInfo ? (
        <>
          <div>{marketInfo.title}</div>
          <div>{marketInfo.content}</div>
          <div>{marketInfo.price}</div>
          <img src={marketInfo.url} alt='이미지 없음' />
        </>
      ) : (
        <div>존재하지 않는 게시글입니다.</div>
      )}
    </>
  );
};

export default MarketArticle;
