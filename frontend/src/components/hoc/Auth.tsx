import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
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
    const setIsLogin = useSetRecoilState(loggedState);
    const isAuth = useRecoilValue(authCheckSelector);
    useEffect(() => {
      if (!isAuth) {
        setIsLogin(false);
        if (option) {
          setIsLogin(false);
          history.push('/');
        }
      } else {
        setIsLogin(true);
        if (adminRoute) {
          history.push('/');
        } else {
          if (option === false) {
            history.push('/');
          }
        }
      }
    }, [history, isAuth, setIsLogin]);
    return <SpecificFunction />;
  }
  return Authentication;
}
