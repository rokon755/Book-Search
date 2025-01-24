const Search = ({ searchTerm, onSearchBook }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search Book..."
          onChange={(event) => onSearchBook(event.target.value)}
          className="outline-0 mb-5 border rounded-md w-full p-2 border-gray-300"
        />
      </form>
    </div>
  )
}

export default Search