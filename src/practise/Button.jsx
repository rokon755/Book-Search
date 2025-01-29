
const Button = ({ count, onSetCount, decrementCount, resetCount }) => {
  return (
    <div className="text-center">
      <h1 className="text-center text-2xl pt-[15px] mb-5.5">The count is Button: {count}</h1>
      <button className="bg-blue-500 text-white p-3 mr-1.5 rounded-md" onClick={resetCount}>Reset</button>
      <button className="bg-blue-500 text-white p-3 mr-1.5 rounded-md" onClick={decrementCount}>Decrement</button>
      <button className="bg-blue-500 text-white p-3 mr-1.5 rounded-md" onClick={onSetCount}>Increment</button>
    </div>
  )
}

export default Button