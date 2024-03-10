import { useEffect, useState } from 'react';

const useApi = <T>(fetchFunction: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: T = await fetchFunction();
        setData(result);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return { data, loading, error };
};

export default useApi;
