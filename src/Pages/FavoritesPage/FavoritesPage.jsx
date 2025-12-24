import { useSelector } from "react-redux";
import { selectFavorites } from "../../store/favorites/favorites.selector";
import { Link,} from "react-router-dom";

import ProductItem from "../../components/ProductItem/ProductItem";
import {
  FavoritesPageContainer,
  FavoritesContainer,
} from "./FavoritesPage.styles";

const FavoritesPage = () => {
 
  const favorites = useSelector(selectFavorites)

  return (
    <FavoritesPageContainer>
      {favorites.length === 0 ? (
        <p>You don’t have any favorite items yet.</p>
      ) : (
        <FavoritesContainer>
          {favorites.map((item) => (
            <Link key={item.id} to={`/shop/${item.category}/${item.id}`}>
              <ProductItem item={item}/>
            </Link>
          ))}
        </FavoritesContainer>
      )}
    </FavoritesPageContainer>
  );
}

export default FavoritesPage;
