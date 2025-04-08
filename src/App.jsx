import { useEffect, useMemo, useState } from 'react';
import BookList from './components/BookList';
import BookFilter from './components/BookFilter';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchingBook = async () => {
      const books = await fetch('http://gutendex.com/books/');
      const response = await books.json();
      setBooks(response.results);
      setIsLoading(false);
    };
    fetchingBook();
  }, []);

  const [filterParam, setFilterParam] = useState('');
  const filteredBooks = useMemo(
    () =>
      books?.filter((b) =>
        b.title.toLowerCase().includes(filterParam.toLowerCase())
      ),
    [filterParam]
  );

  return (
    <div className="min-h-screenb min-h-screen bg-amber-600 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Explore Books
        </h1>
        <BookFilter
          setFilterParam={setFilterParam}
          filterParam={filterParam}
        />
        <div className="mt-6">
          {isLoading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <BookList books={filteredBooks.length === 0 ? books : filteredBooks} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
