import { useEffect, useState } from "react";
function useFetch(url, method = "GET") {
  let [postData, setPostData] = useState(null);
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  // fetch the json-data and handle the server by using useEffect hooks
  useEffect(() => {
    let abortController = new AbortController();
    let signal = abortController.signal;
    let options = { signal, method };
    setLoading(true);

    //fetchData function
    let fetchData = () => {
      fetch(url, options)
        .then((res) => {
          // for error
          if (!res.ok) {
            throw Error("Something went wrong!");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
          setLoading(false);
        })
        .catch((e) => {
          setError(e.message);
        });
    };

    //post method
    if (method === "POST" && postData) {
      console.log(postData);
      options = {
        ...options,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      };
      //fetchData
      fetchData();
    }

    //get method
    if (method === "GET") {
      fetchData();
    }

    //cleanup function
    return () => {
      abortController.abort();
    };
  }, [url, postData]);
  return { setPostData, data, loading, error };
}

export default useFetch;
