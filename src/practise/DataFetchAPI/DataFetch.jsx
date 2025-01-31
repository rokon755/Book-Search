import { useEffect, useState } from "react"


const DataFetch = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error data:", error));
  }, []);


  return (
    <div>
      <h2>Fetched Posts</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {posts.slice(0, 5).map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div >
  )
}

export default DataFetch