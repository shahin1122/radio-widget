import { useEffect, useState } from 'react';

import radio from "../../interfases";


export interface radios {
  results: radio[];
}

 export const getRadioService = () => {
  const [result, setResult] = useState<radio[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/radios')
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return  { result, loading, error };
  
};

export default getRadioService;