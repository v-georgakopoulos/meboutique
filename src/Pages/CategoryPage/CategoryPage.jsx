import { Link, useParams } from "react-router-dom";
import {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/products/products.reducer";
import { selectProducts,selectSearchTerm } from "../../store/products/products.selector";

import ProductItem from "../../components/ProductItem/ProductItem";
import SearchBar from "../../components/SearchBar/SearchBar"

import {
  CategoryContainer,

  ProductsContainer,
  SortContainer,

} from "./CategoryPage.styles";

const CategoryPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch()
  const searchTerm = useSelector(selectSearchTerm)
  const products = useSelector(selectProducts)

  const [sortOption, setSortOption] = useState("default");
  const [filteredAndSortedProducts, setFilteredAndSortedProducts] = useState([]);

  const categoryData = products.find(
    (cat) => cat.route.toLowerCase() === category.toLowerCase()
  );

  const handleChangeSelect = (e) =>{
      setSortOption(e.target.value)
  }

  useEffect(() => {
    if (!categoryData) return;

    let items = [...categoryData.items];
    items = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    switch (sortOption) {
      case "az":
        items.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "za":
        items.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case "price-low":
        items.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        items.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }

    setFilteredAndSortedProducts(items);
  }, [categoryData, searchTerm, sortOption]);

  if (!categoryData) return <h2>Category not found</h2>;

  return (
    <CategoryContainer>
          <SortContainer>
            <SearchBar 
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            />
          <select
            value={sortOption}
            onChange={handleChangeSelect}
          >
            <option value="default">Sort by</option>
            <option value="az">Name: A–Z</option>
            <option value="za">Name: Z–A</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          </SortContainer>
  
      <ProductsContainer>
        {filteredAndSortedProducts.length ? (
          filteredAndSortedProducts.map((product) => (
            <Link key={product.id} to={`/shop/${category}/${product.id}`}>
              <ProductItem product={product} category={category} />
            </Link>
          ))
        ) : (
          <p>No products found</p>
        )}
      </ProductsContainer>
    </CategoryContainer>
  );
}

export default CategoryPage;
