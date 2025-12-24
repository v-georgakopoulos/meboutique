import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.reducer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Spinner from "./components/Spinner/Spinner";
import RequireAuth from "./components/RequireAuth/RequireAuth";


const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const AuthPage = lazy(() => import("./Pages/AuthPage/AuthPage"));
const CategoryPage = lazy(() => import("./Pages/CategoryPage/CategoryPage"));
const ProductPage = lazy(() => import("./Pages/ProductPage/ProductPage"));
const FavoritesPage = lazy(() => import("./Pages/FavoritesPage/FavoritesPage"));
const CartPage = lazy(() => import("./Pages/CartPage/CartPage"));
const CheckoutPage = lazy(() => import("./Pages/CheckoutPage/CheckoutPage"));
const PaymentPage = lazy(() => import("./Pages/PaymentPage/PaymentPage"));
const ConfirmationPage = lazy(() => import("./Pages/ConfirmationPage/ConfirmationPage"));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="auth" element={<AuthPage />} />
            <Route path="shop/:category" element={<CategoryPage />} />
            <Route path="shop/:category/:productId" element={<ProductPage />} />
            <Route
              path="favorites"
              element={
                <RequireAuth>
                  <FavoritesPage />
                </RequireAuth>
              }
            />
            <Route
              path="cart"
              element={
                <RequireAuth>
                  <CartPage />
                </RequireAuth>
              }
            />
            <Route
              path="checkout"
              element={
                <RequireAuth>
                  <CheckoutPage />
                </RequireAuth>
              }
            />
          </Route>
          <Route
            path="payment"
            element={
              <RequireAuth>
                <PaymentPage />
              </RequireAuth>
            }
          />
          <Route
            path="confirmation"
            element={
              <RequireAuth>
                <ConfirmationPage />
              </RequireAuth>
            }
          />
        </Routes>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
