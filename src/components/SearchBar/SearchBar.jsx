import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm } from "../../store/products/products.selector";
import { setSearchTerm } from "../../store/products/products.reducer";

import { Search } from "lucide-react";
import { SearchBarContainer } from "./SearchBar.styles";


const SearchBar = () => {
  const dispatch = useDispatch()
  const searchTerm = useSelector(selectSearchTerm)
  
  return (
    <SearchBarContainer>
      <Search size={18} />
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value.toLowerCase()))}
        autoFocus
      />
    </SearchBarContainer>
  );
}

export default SearchBar;
