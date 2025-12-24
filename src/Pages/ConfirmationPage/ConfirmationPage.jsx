import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {clearCart} from "../../store/cart/cart.reducer"
import Button from "../../components/Button/Button";

import { ConfirmationContainer } from "./ConfirmationPage.styles";


const ConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { formFields, amount } = location.state || {};

  const {firstName, lastName} = formFields

  const handleGotoHome = () => {
    dispatch(clearCart())
    navigate("/")
  }

  return (
    <ConfirmationContainer>
      <h2>Payment Successful!</h2>
      <p>Thank you, {firstName} {lastName}.</p>
      <p>Amount paid: €{amount}</p>
      <Button onClick={handleGotoHome}>Back to Home</Button>
    </ConfirmationContainer>
  );
};

export default ConfirmationPage;
