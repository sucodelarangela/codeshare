import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data: response } = await axios.get(url);
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