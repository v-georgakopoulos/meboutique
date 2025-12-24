import { useState } from "react";
import { Link, Outlet,} from "react-router-dom";
import { Heart, ShoppingCart, User, LogOut } from "lucide-react";

import { signOutUser } from "../../utils/firebase/firebase";
import { useSelector,useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector"
import { selectCartCount } from "../../store/cart/cart.selector";
import { clearCart } from "../../store/cart/cart.reducer";
import { resetFavorites } from "../../store/favorites/favorites.reducer"

import {
  NavigationContainer,
  MobileNav,
  Logo,
  NavLinksContainer,
  MobileMenu,
} from "./Navigation.styles";


const tabs = [
  { id: 1, name: "Womens", path: "shop/womens" },
  { id: 2, name: "Mens", path: "shop/mens" },
  { id: 3, name: "Sneakers", path: "shop/sneakers" },
  { id: 4, name: "Jackets", path: "shop/jackets" },
  { id: 5, name: "Hats", path: "shop/hats" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const cartCount = useSelector(selectCartCount)

  const handleSignOut = () => {
    signOutUser()
    dispatch(clearCart())
    dispatch(resetFavorites())
  }
  

  return (
    <>
      <NavigationContainer>
        <MobileNav onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar1 ${menuOpen ? "change" : ""}`}></div>
          <div className={`bar2 ${menuOpen ? "change" : ""}`}></div>
          <div className={`bar3 ${menuOpen ? "change" : ""}`}></div>
        </MobileNav>
        {menuOpen && (
          <MobileMenu>
            {tabs.map((tab) => (
              <li key={tab.id}>
                <Link to={tab.path} onClick={() => setMenuOpen(false)}>
                  {tab.name}
                </Link>
              </li>
            ))}
          </MobileMenu>
        )}
        <Logo>
          <Link to="/">Boutique</Link>
        </Logo>
        <NavLinksContainer>
          {currentUser ? (
            <span className="sign-out" onClick={handleSignOut}>
              <LogOut />
            </span>
          ) : (
            <Link to="/auth">
              <User />
            </Link>
          )}
          <Link to="/favorites">
            <Heart />
          </Link>
          <Link className="cart-icon" to="/cart">
            <ShoppingCart />
            {cartCount > 0 && (
              <div className="cart-count">
                <span className="cart-count-icon">{cartCount}</span>
              </div>
            )}
          </Link>
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;
