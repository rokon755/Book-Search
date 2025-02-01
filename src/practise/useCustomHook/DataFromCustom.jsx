import { Fragment } from "react";
import useCustomHook from "./useFetch"

const DataFromCustom = () => {

  const [data] = useCustomHook("https://jsonplaceholder.typicode.com/posts")

  return (
    <div className="rounded-md mt-5 p-5.5 mb-5 max-w-300 m-auto">
      <h2 className="text-center text-2xl pb-10">Fetched Data from Custom Hook</h2>
      <div className="flex flex-wrap gap-2.5">
        {
          data.slice(0, 8).map((item) => {
            return (
              <div key={item.id} className="w-[24.3%] bg-gray-100 border-1 border-gray-200 p-3 rounded-md">
                <p>{item.id}</p>
                <h3 className="mb-3 text-1xl font-bold">{item.title}</h3>
                <p>{item.body}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default DataFromCustom