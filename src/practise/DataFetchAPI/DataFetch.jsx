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
    <div className="border-1 border-gray-300 rounded-md mt-5 p-5.5 mb-5 max-w-300 m-auto">
      <h2 className="text-center text-2xl pb-10">Fetched Data from API</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul className="flex flex-wrap gap-2.5">
          {posts.slice(0, 5).map((post) => (
            <li key={post.id} className="w-[19.3%] bg-gray-200 p-3 rounded-md">
              <h3 className="mb-3 text-1xl font-bold">{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div >
  )
}

export default DataFetch