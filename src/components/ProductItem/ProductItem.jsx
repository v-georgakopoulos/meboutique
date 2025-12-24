import { useSelector, useDispatch } from "react-redux";
import { toggleFavorites } from "../../store/favorites/favorites.reducer.js";
import {selectFavorites} from "../../store/favorites/favorites.selector.js"
import { selectCurrentUser} from "../../store/user/user.selector.js"
import { Heart } from "lucide-react";
import { toast } from "react-toastify";
import {
  CategoryItemContainer,
  ImageContainer,
  HeartIconContainer,
  ItemIfo
} from "./ProductItem.styles.jsx";

const ProductItem = ({ product ,category }) => {
  const { imageUrl, name, price } = product;

  const dispatch = useDispatch()
  const favorites = useSelector(selectFavorites) 
  const currentUser = useSelector(selectCurrentUser)
  
  const isFavorite = favorites.some((fav) => fav.id === product.id);
  const isDisabled = !currentUser

  const handleFavorites = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if(isDisabled) {
      toast.warning("Log in to add products to favorites")
      return
    }
    dispatch(toggleFavorites({...product,category}))
  }

  return (
    <CategoryItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
        <HeartIconContainer
          active={isFavorite}
          onClick={handleFavorites}
        >
          <Heart />
        </HeartIconContainer>
      </ImageContainer>
      <ItemIfo>
        <p>{name}</p>
        <p>€{price}</p>
      </ItemIfo>
    </CategoryItemContainer>
  );
}

export default ProductItem;
