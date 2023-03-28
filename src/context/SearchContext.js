import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchState = (props) => {

  const [searchQuery, setSearchQuery] = useState("");
  const keys = ["name", "email", "role"];

    return (
      <SearchContext.Provider
        value={{ searchQuery, setSearchQuery, keys }}
      >
        {props.children}
      </SearchContext.Provider>
    );
}

export default SearchState;