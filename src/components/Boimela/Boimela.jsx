import Header from "./Header"
import Search from "./Search"
import BookList from "./BookList"

import { useState } from "react"


const Boimela = () => {

  const BOOKS = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      featured: false,
    },
    {
      id: 2,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      featured: false,
    },
    {
      id: 3,
      title: "To Kill a Lorem",
      author: "George Orwell",
      featured: false,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      featured: false,
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      featured: false,
    },
    {
      id: 6,
      title: "JavaScript Programming Learning",
      author: "Brendan Eich",
      featured: false,
    },
  ];



  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState(BOOKS);


  const toggleFeatured = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, featured: !book.featured } : book
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-5">
      <Header />
      <Search searchTerm={searchTerm} onSearchBook={setSearchTerm} />
      <BookList searchTerm={searchTerm} books={books} onFeatureBook={toggleFeatured} />
    </div>
  )
}

export default Boimela