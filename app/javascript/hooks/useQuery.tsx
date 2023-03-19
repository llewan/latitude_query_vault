import {useCallback, useState} from "react";
import Request from "../business/request";

export default function useQuery() {
  const [queryResult, setQueryResult] = useState<Record<string, any>[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const submitQuery = useCallback((sourceId: number, query: string) => {
    const request = new Request<Record<string, any>[]>();
    setIsFetching(true);
    request.send('/execute', {
      method: 'POST',
      body: JSON.stringify({ source_id: sourceId, query_text: query }) })
      .then((response) => {
        setQueryResult(response.data);
        setIsFetching(false);
      });
  }, [])

  return { submitQuery, queryResult, isQueryFetching: isFetching };
}