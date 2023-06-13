import {useCallback, useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHandle =useCallback( async () => {
    try {
      const {data: response} = await axios.get(url);

      setData(response);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  },[url])

  useEffect(()=>{

fetchHandle()

  },[])

return {data,loading,error}
};

export default useFetch;


