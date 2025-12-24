import { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Button, { BUTTON_TYPE_CLASSES } from "../../components/Button/Button";
import { PaymentFormContainer, FormContainer } from "./PaymentPage.styles";

const PaymentPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);

  const formFields = location.state?.formFields;
  const cartTotal = location.state?.cartTotal;

  useEffect(() => {
    if (!formFields || !cartTotal) {
      toast.error("Checkout information or cart total not found.");
      navigate("/checkout");
    }
  }, [formFields, cartTotal, navigate]);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    try {
      const response = await fetch("/.netlify/functions/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Math.round(cartTotal * 100) }), // in cents
      }).then((res) => res.json());

      const {
        paymentIntent: { client_secret },
      } = response;

      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: `${formFields.firstName} ${formFields.lastName}`,
            email: formFields.email,
          },
        },
      });

      if (paymentResult.error) {
        toast.error(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");
        navigate("/confirmation", {
          state: { formFields, amount: cartTotal },
        });
      }
    } catch (error) {
      toast.error("Payment failed. Please try again.");
      console.error(error);
    }

    setIsProcessing(false);
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <Button
          disabled={isProcessing}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          {isProcessing ? "Processing..." : `Pay €${cartTotal.toFixed(2)}`}
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentPage;
