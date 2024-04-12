import { useEffect, useState } from 'react';
import { MovieItem } from '../Types/MovieItem';

const apiKey = import.meta.env.VITE_API_KEY;

function useFetch(url: string, endpoint: string) {
  const [data, setData] = useState<MovieItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${url}${endpoint}?language=pt-BR${apiKey}`);
      const json = await response.json();
      setData(json.results);
    };
    fetchData();
  }, [url, endpoint]);
  return data;
}

export default useFetch;
