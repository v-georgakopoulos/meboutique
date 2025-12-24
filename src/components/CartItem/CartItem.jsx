import { useDispatch } from "react-redux"
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart.reducer"


import { ChevronLeft, ChevronRight, Trash, } from "lucide-react"

import { 
    CartItemContainer, 
    QuantityContainer,
    RemoveItem
} from "./CartItem.style"

const CartItem = ({cartItem}) => {

    const {name,imageUrl,quantity,price} = cartItem
    const dispatch = useDispatch()

    const handleAddItemToCart = () => {
        dispatch(addItemToCart(cartItem))
    }
    const hanldeRemoveItemFromCart = () => {
        dispatch(removeItemFromCart(cartItem))
    }

    const handleClearItemFromCart = () => {
        dispatch(clearItemFromCart(cartItem))
    }

  return (
    <CartItemContainer>
        <img src={imageUrl} alt={name} />
        <QuantityContainer>
            <span onClick={hanldeRemoveItemFromCart}><ChevronLeft/></span>
                <span>{quantity}</span>
            <span onClick={handleAddItemToCart}><ChevronRight/></span>
        </QuantityContainer>
        <strong className="price">€{price * quantity}</strong>
        <RemoveItem onClick={handleClearItemFromCart}><Trash/></RemoveItem>
    </CartItemContainer>
  )
}

export default CartItem
