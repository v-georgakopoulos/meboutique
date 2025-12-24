import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import FormInput from "../FormInput/FormInput";

import { SignUpContainer } from "./Signupform.styles";
import Button from "../Button/Button";

import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signupform = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const navigate = useNavigate()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      alert("Password must have at least 8 characters");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword({
        displayName,
        email,
        password,
      });
      await createUserDocumentFromAuth(user);
      toast.success("Account created successfully!")
      resetFormFields();
      navigate("/")
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user,email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChangeHandler}
          required
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onChangeHandler}
          minLength={8}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeHandler}
          required
        />
        <Button type="submit">Sign up</Button>
      </form>
    </SignUpContainer>
  );
}

export default Signupform;
