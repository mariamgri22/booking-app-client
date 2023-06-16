import React, { ChangeEvent } from "react";

interface SearchProps {
  search: string;
  searchQuery: string;
  handleSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({
  search,
  searchQuery,
  handleSearch,
}) => {
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search services..."
          value={searchQuery}
          onChange={onInputChange}
          className="search-input"
        />
        <span className="search-icon">
          <img src={search} alt="" />
        </span>
      </div>
    </>
  );
};

export default Search;
