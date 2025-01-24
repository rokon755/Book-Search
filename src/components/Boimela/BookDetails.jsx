const BookDetails = (props) => {
  return (
    <div >
      <h2 className="font-bold text-[20px]">{props.title}</h2>
      <p className="text-[16px] text-gray-500">{props.author}</p>
    </div>
  )
}
export default BookDetails