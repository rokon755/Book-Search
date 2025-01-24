import { Heart } from "lucide-react"

const FutureBook = ({ book, onFeatureBook }) => {
  return (
    <button
      className="cursor-pointer"
      onClick={() => onFeatureBook(book.id)}
    >
      <Heart color={book.featured ? "#05b4ff" : "Black"} />
    </button>
  );
}

export default FutureBook