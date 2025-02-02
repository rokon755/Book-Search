import Button from "./Button"

const Child = ({ count, onSetCount, decrementCount, resetCount }) => {
  return (
    <div>
      <h1 className="text-center text-2xl pt-[15px]">The count is child: {count}</h1>
      <Button count={count} onSetCount={onSetCount} decrementCount={decrementCount} resetCount={resetCount} />
    </div>
  )
}

export default Child