import { useContext } from 'react';
import '../App.css';
import { SearchContext } from '../context/SearchContext';

const SearchBar = () => {

  const {searchQuery, setSearchQuery} = useContext(SearchContext);
  return (
    <div className="search">
      <input type="search" className="search-bar" placeholder='Search...' value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
    </div>
  );
}

export default SearchBar;