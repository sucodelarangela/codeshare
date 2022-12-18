import { useEffect } from 'react';
import { useState } from 'react';
import { api } from 'api/api';

const useFetch = (route) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data: response } = await api.get(route);
        setData(response);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetch();
  }, []);

  return {
    loading,
    data,
    error
  };
};

export default useFetch;