import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

const UseEffectPractice = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("hello world");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("failed to fetch data");
      }
      console.log(data);
      const result = await response.json();
      console.log("Data fetched successfully!");
      setData(result);
      console.log(result);
      console.log(data);
    } catch (error) {
      setError(error.message);
      console.log("error fetching data:", error.message);
    } finally {
      setLoading(false);
      console.log("fetching data finished");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-3xl">Posts</h1>
        <button
          className="bg-sky-500 px-2 py-2 rounded-md mb-8 mt-2"
          onClick={() => fetchData()}
        >
          fetch data
        </button>
        <button onClick={() => setChange(!change)}>Toggle</button>
        {change && <p>This is a changed message</p>}
        {loading && <Spinner />}
        {error && <p>Error: {error}</p>}
        <ul className="list-disc">
          {data.map((post) => (
            <li key={post.id}>
              <h2 className="text-2xl">{post.title}</h2>
              <p className="text-sm">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UseEffectPractice;
