import BookDetails from "./BookDetails"
import FutureBook from "./FutureBook"

const BookRow = ({ book, onFeatureBook }) => {
  return (
    <div className="flex flex-nowrap justify-between items-center w-full bg-blue-50 mb-5 p-5.5  rounded-lg border-gray-200 border-1">
      <BookDetails title={book.title} author={book.author} />
      <FutureBook book={book} onFeatureBook={onFeatureBook} />
    </div>
  )
}


export default BookRow