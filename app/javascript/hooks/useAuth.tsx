import {useCallback, useEffect, useState} from "react";
import Request from '../business/request';
import {LoggedInResponse} from "../business/interfaces";

function useAuth() {
  const [loginState, setLoginState] = useState<LoggedInResponse>();
  const [isAuthFetching, setIsAuthFetching] = useState(false);

  useEffect(() => {
    setIsAuthFetching(true);
    new Request<LoggedInResponse>()
      .send('/logged_in')
      .then(({ error, data }) => {
        if (!error) setLoginState(data);
        setIsAuthFetching(false);
      })
  }, []);

  const login = useCallback(async (username, password) => {
    new Request<string>()
      .send('/login', {
        method: 'POST',
        body: JSON.stringify({ username, password })})
      .then(({ error, data }) => {
        if (!error) setLoginState({  logged_in: true, user: data });
      })

  }, [loginState]);

  const logout = useCallback(async () => {
    new Request<string>()
      .send('/logout', { method: 'DELETE' })
      .then((response) => {
        setLoginState({ logged_in: false });
      });
  }, []);

  return { loginState, login, logout, isAuthFetching }
}

export default useAuth;


