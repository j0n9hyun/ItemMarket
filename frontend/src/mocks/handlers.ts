import { rest } from 'msw';
import { MarketListType } from '../components/types/marketTypes';

// export const handlers = [
//   rest.get(
//     'https://jsonplaceholder.typicode.com/posts/100',
//     async (req, res, ctx) => {
//       const data = await ctx.fetch(req);
//       return res(
//         ctx.json({
//           ...data,
//           title: 'Title has been mocked',
//         }),
//       );
//     },
//   ),
// ];

export const handlers = [
  rest.get <MarketListType> (
    '/market_list',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {  
          userId: 1,
          id: 1,
          title: '팝니다',
          content: '팝니다 팔아용~',
          price: '30000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603852170/noticon/iwbd31aaoxcxh1ololsi.png'
        },
        {  
          userId: 2,
          id: 2,
          title: '이러쿵',
          content: '저러쿵스~',
          price: '50000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567061777/noticon/b1nph8nhaqwxuzt4g0tr.png',
        },
        {  
          userId: 3,
          id: 3,
          title: 'ㅁㄴㅇㅁㄴㅇ',
          content: 'ㅁㄴㅇㅁㄴㅇㅁㄴㅇ~',
          price: '80000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586273424/noticon/b06fppj93rohucfgfeim.gif'
        },
        {  
          userId: 4,
          id: 4,
          title: 'sample',
          content: 'smaple',
          price: '90000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573185009/noticon/yuen59reofeivvdhooi3.gif'
        },
        {  
          userId: 5,
          id: 5,
          title: '문경 사과박스 5kg',
          content: '택포 N마넌',
          price: '100000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1604312662/noticon/d9f3rjna9wttdvudhhbb.gif'
          },
        {  
          userId: 6,
          id: 6,
          title: '문경 사과박스 5kg',
          content: '택포 N마넌',
          price: '100000',
          url: 'https://item.kakaocdn.net/do/d0abc6fe74e616536cf07626699bbc707154249a3890514a43687a85e6b6cc82'
          },
        {  
          userId: 7,
          id: 7,
          title: '문경 사과박스 5kg',
          content: '택포 N마넌',
          price: '100000',
          url: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F765877054%2F960x0.jpg%3Ffit%3Dscale'
          },
        {  
          userId: 8,
          id: 8,
          title: '최고급 연필',
          content: '택포 10만 네고x',
          price: '100000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1573273807/noticon/pr2k2ngyxtvzyfges0d3.gif'
          },
        {  
          userId: 9,
          id: 9,
          title: '최고급 연필',
          content: '택포 10만 네고x',
          price: '100000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586272312/noticon/g2e8rnk6ywfirsfgugvq.gif'
          },
        {  
          userId: 10,
          id: 10,
          title: '최고급 연필',
          content: '택포 10만 네고x',
          price: '100000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1572452855/noticon/xd1qswphgts934msfkoe.gif'
          },
        {  
          userId: 11,
          id: 11,
          title: '최고급 연필',
          content: '택포 10만 네고x',
          price: '100000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1572454324/noticon/recuicc05rjfttm6b6th.gif'
          },
        {  
          userId: 12,
          id: 12,
          title: '최고급 연필',
          content: '택포 10만 네고x',
          price: '100000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586272386/noticon/bv6nrkzorm9zhceog71x.gif'
          },
        {  
          userId: 13,
          id: 13,
          title: '최고급 연필',
          content: '택포 10만 네고x',
          price: '100000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679236/noticon/tw10pbuc7czrznrxbbri.png'
          },
        {  
          userId: 14,
          id: 14,
          title: '최고급 연필',
          content: '택포 10만 네고x',
          price: '100000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603261622/noticon/hn81l3ow7lkmtk1wpmtz.gif'
          },
        {  
          userId: 15,
          id: 15,
          title: '최고급 연필',
          content: '택포 10만 네고x',
          price: '100000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679648/noticon/nzqrvl0zwugomhzqmmfm.gif'
          },
        {  
          userId: 16,
          id: 16,
          title: '관짝',
          content: '♬-♪',
          price: '50000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679608/noticon/sc2yu8spfq69pirulsyz.gif'
          },
        {  
          userId: 17,
          id: 17,
          title: '관짝',
          content: '호우',
          price: '836200',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567060481/noticon/asnzeopvjcuc50ynymrw.png'
          },
        {  
          userId: 18,
          id: 18,
          title: '화나뚬',
          content: '씩씩',
          price: '999999',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617087686/noticon/kshb1rtkvuzezmal3yyk.gif'
          },
        {  
          userId: 19,
          id: 19,
          title: 'cssss',
          content: 'f*ck css',
          price: '71826',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579705687/noticon/k1amz2nqzg6pgowfuchn.gif'
          },
        {  
          userId: 20,
          id: 20,
          title: '주디',
          content: '어쩌고저쩌고이러쿵저러쿵어쩌고저쩌고이러쿵저러쿵',
          price: '50000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1616137592/noticon/mllppshbmymxfgbm1jod.gif'
          },
        {  
          userId: 21,
          id: 21,
          title: '제목제목제목 제목제목 제목제목 제목',
          content: '하나 둘 셋 넷 다섯 여섯 일곱 여덟',
          price: '111111111',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617087611/noticon/cznt0rbw203gahpfxdmc.gif'
          },
        {  
          userId: 22,
          id: 22,
          title: '냥',
          content: 'cat',
          price: '3800000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1603679525/noticon/hybzzqipun5hoqiabvbo.gif'
          },
        {  
          userId: 23,
          id: 23,
          title: '불',
          content: 'fire',
          price: '127362173612387',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1586270956/noticon/j2rfvvpj4rnh7vxooneo.gif'
          },
        {  
          userId: 24,
          id: 24,
          title: '꿱',
          content: '꾸에엑',
          price: '1500000',
          url: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1617087392/noticon/ccfnewdq68nuu8pz0zvv.gif'
          },
        {  
          userId: 25,
          id: 25,
          title: '꿱',
          content: '꾸에엑',
          price: '1500000',
          url: 'https://atlantak.com/wp-content/uploads/2019/08/111.jpg'
          },
        {  
          userId: 26,
          id: 26,
          title: '기능사 책 ㅍ',
          content: 'aaaaaaaaaaaaaaaaaa',
          price: '15000',
          url: 'https://t1.daumcdn.net/cfile/blog/991B154A5E0D24A51B'
          },
        ]
        ),
      );
    },
  ),
];