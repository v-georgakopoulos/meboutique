import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectCartTotal} from "../../store/cart/cart.selector"

import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { toast } from "react-toastify";


import {
  CheckoutContainer,
} from "./CheckoutPage.styles"

const defaultFormFields = {
  firstName: "",
  lastName: "",
  country: "",
  address: "",
  postCode: "",
  city: "",
  state: "",
  email: "",
  phoneNumber: "",
};

const CheckoutPage = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const cartTotal = useSelector(selectCartTotal)
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "country",
      "address",
      "postCode",
      "city",
      "email",
      "phoneNumber",
    ];
    for (let field of requiredFields) {
      if (!formFields[field]) {
        toast.error("Please fill in all required fields.");
        return;
      }
    }
    navigate("/payment", { state: { formFields, cartTotal } });
  };

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit}>
        <div className="input-grid">
          <FormInput label="First Name" value={formFields.firstName} name="firstName" onChange={handleChange} />
          <FormInput label="Last Name" value={formFields.lastName} name="lastName" onChange={handleChange} />
        </div>
        <div className="single-column">
        <FormInput label="Country" value={formFields.country} name="country" onChange={handleChange} />
        </div>
        <div className="single-column">
        <FormInput label="Address" value={formFields.address} name="address" onChange={handleChange} />
        </div>
        <div className="input-grid">
          <FormInput label="Post Code" value={formFields.postCode} name="postCode" onChange={handleChange} />
          <FormInput label="City" value={formFields.city} name="city" onChange={handleChange} />
        </div>
        <div className="single-column">
        <FormInput label="State" value={formFields.state} name="state" onChange={handleChange} />
        </div>
        <div className="input-grid">
          <FormInput label="Email" value={formFields.email} name="email" onChange={handleChange} />
          <FormInput label="Phone Number" value={formFields.phoneNumber} name="phoneNumber" onChange={handleChange} />
        </div>
        <Button type="submit">Proceed to Payment</Button>
      </form>
    </CheckoutContainer>
  );
}

export default CheckoutPage;
