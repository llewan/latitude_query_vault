import {useEffect, useState} from "react";
import Request from "../business/request";
import {LoggedInResponse, Source} from "../business/interfaces";

export default function useSources(loginState: LoggedInResponse) {
  const [sources, setSources] = useState<Source[]>([]);
  const { user, logged_in } = loginState ?? {};
  const userId = user?.id;

  useEffect(() => {
    if (logged_in) {
      new Request<Source[]>()
        .send(`/user/${userId}/sources`)
        .then((res) => setSources(res.data));
    }

  }, [loginState]);

  return { sources };
}