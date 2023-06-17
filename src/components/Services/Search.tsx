import React, { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";


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
  const { t } = useTranslation();


  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder={t("Search services...")}
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
