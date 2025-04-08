import BookItem from "./bookItem";

function BookList({ books }) {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Books</h3>
      <div className="space-y-6">
        {books?.map((book) => (
          <BookItem book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
