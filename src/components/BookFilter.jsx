import React from 'react';

export default function BookFilter({ setFilterParam, filterParam }) {
  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
      <form onSubmit={handleSubmit} className="flex items-center justify-between">
        <div className="w-full">
          <label
            htmlFor="searchInput"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Search Books
          </label>
          <input
            type="text"
            id="searchInput"
            placeholder="Search for a book by title..."
            onChange={(e) => setFilterParam(e.target.value)}
            value={filterParam}
            className="w-full p-4 border border-amber-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
          />
        </div>
      </form>
    </div>
  );
}
