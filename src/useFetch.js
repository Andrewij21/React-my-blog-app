import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok)
          throw Error("Could not fetch data the data for that resource");
        return res.json();
      })
      .then((data) => {
        setError(null);
        setIspending(false);
        setData(data);
      })
      .catch((e) => {
        setIspending(false);
        setError(e.message);
      });
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
