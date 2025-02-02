import Parent from "./Parent";

const Avatar = () => {

  const listUL = [
    {
      id: crypto.randomUUID(),
      title: "What is React",
      body: "Learn React like a Cake Walk"
    },
    {
      id: 1,
      title: "What is Web Development",
      body: "Get Stronger in JavaScript",
    },
    {
      id: 2,
      title: "What is JavaScript",
      body: "Be Master of Problem Solving",
    },
  ]

  const allList = [];
  listUL.map((list) => {
    const result =
      <div key={list.id} className="mb-5.5 text-center">
        <h1 className="text-2xl font-bold">{list.title}</h1>
        <p >{list.body}</p>
      </div>
    allList.push(result)
  })

  return (
    <>
      {allList}
      <Parent />
    </>
  )
}

export default Avatar