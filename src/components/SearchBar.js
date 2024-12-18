'use client';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value); 
  };

  return (
    <input
      type="text"
      placeholder="Search books by title or author..."
      className="w-full p-4 rounded-md border border-gray-300"
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
