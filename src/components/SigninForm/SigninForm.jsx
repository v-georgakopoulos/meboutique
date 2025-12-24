import { useState } from "react";
import {
  // signInWithGooglePopUp,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase";

import { SigninContainer } from "./SigninForm.styles";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SigninForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await signInAuthWithEmailAndPassword(email, password);
      resetFields();
      navigate("/")
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <SigninContainer>
      <h2>Already have an account!</h2>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
        />
        <Button type="submit">Sign in</Button>
      </form>
    </SigninContainer>
  );
}

export default SigninForm;
