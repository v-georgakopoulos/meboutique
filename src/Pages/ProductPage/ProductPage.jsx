import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../../store/products/products.selector"
import { selectCurrentUser} from "../../store/user/user.selector"
import { addItemToCart } from "../../store/cart/cart.reducer"
import { useParams, useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";

import { toast } from "react-toastify";

import {
  ProductPageContainer,
  ImageContainer,
  InfoContainer
} from "./ProductPage.styles"

const ProductPage = () => {
  const { category, productId } = useParams();
  const products = useSelector(selectProducts)
  const currentUser = useSelector(selectCurrentUser)

  const dispatch = useDispatch()


  const navigate = useNavigate();

  const categoryData = products.find((cat) => cat.route === category);

  const product = categoryData?.items.find(
    (item) => item.id === Number(productId)
  );
  const { name, imageUrl, price, description } = product;

  if (!product) return <h2>Product not found</h2>;

  const addItemToCartHandler = () => {
    if (!currentUser) {
      toast.warning("You must be signed in to add items to the cart!");
      navigate("/auth");
      return
    }
    dispatch(addItemToCart(product));
  };
  
  return (
    <ProductPageContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <InfoContainer>
        <div className="info">
          <h2>{name}</h2>
          <p>{description}</p>
          <strong>${price}</strong>
          <Button className="add-to-cart" onClick={addItemToCartHandler}>
            Add to cart
          </Button>
        </div>
      </InfoContainer>
    </ProductPageContainer>
  );
}

export default ProductPage;
