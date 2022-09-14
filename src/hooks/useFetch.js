import { useEffect, useState } from "react";

export function useFetch(url, options) {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
      setLoading(false);
      console.log(json);
    } catch (error) {
      setError(error);
      setLoading(false);
      console.log("error", error);
    }
  };

  return { data, error, loading };
}
