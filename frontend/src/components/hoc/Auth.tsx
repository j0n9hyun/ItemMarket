import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { authCheckSelector, loggedState } from '../atoms/authState';

/*
null: everyone,
true: only logged in
false: only not logged in
*/
export default function Auth(
  SpecificFunction: any,
  option: boolean | null,
  adminRoute: number | null = null
) {
  function Authentication() {
    const history = useHistory();
    const [logged, setLogged] = useRecoilState(loggedState);
    // // const setIsLogin = useSetRecoilState(isLoginState);
    const { isAuth } = useRecoilValue(authCheckSelector);
    console.log(isAuth);
    // useEffect(() => {
    //   if (!isAuth) {
    //     setIsLogin(false);
    //     if (option) {
    //       history.push('/');
    //       console.log('option: true');
    //     }
    //   } else {
    //     setIsLogin(true);
    //     if (adminRoute && !isAdmin) {
    //       history.push('/');
    //       console.log('only admin');
    //     } else {
    //       if (option === false) {
    //         console.log('option: false');
    //         history.push('/');
    //       }
    //     }
    //   }
    // }, []);
    return <SpecificFunction />;
  }
  return Authentication;
}
