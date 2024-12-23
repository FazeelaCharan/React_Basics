/* eslint-disable */
import React, { useState } from "react";

const UseEffectPractice = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("failed to fetch data");
      }
      const result = await response.json();
      console.log("Data fetched successfully!");
      setData(result);
    } catch (error) {
      setError(error.message);
      console.log("error fetching data:", error.message);
    } finally {
      setLoading(false);
      console.log("fetching data finished");
    }

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <>
        <div>
          <h1>posts</h1>
          <ul>
            {data.map((post) => {
              /* <li>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <button onClick={()=>setChange(!change)}>Toggle</button>
    {change && <p>This is a changed message</p>}
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    
 </li> */

              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>;
            })}
          </ul>
        </div>
      </>
    );
  };
};
export default UseEffectPractice;
