import React from 'react';

import { UseFetchResult } from '../interface/useFetch.interface';

const useFetch = <T,>(url: string): UseFetchResult<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const apiReq = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result: T = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    apiReq();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
