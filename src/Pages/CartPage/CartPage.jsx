import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import { useNavigate } from "react-router-dom";

import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/Button/Button";
import { ShoppingCartIcon } from "lucide-react";

import {
  CartContainer,
  ProductContainer,
  CartTotal
} from "./CartPage.styles"

const CartPage = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };


  return (
    <CartContainer>
      {cartItems.length ? (
        <>
          <ProductContainer>
            <p>Product</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Remove</p>
          </ProductContainer>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}

          <CartTotal>
            <span>Total: €{cartTotal}</span>
            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
          </CartTotal>
        </>
      ) : (
        <p className="empty">
          Your cart is empty <ShoppingCartIcon />
        </p>
      )}
    </CartContainer>
  );
}

export default CartPage;
