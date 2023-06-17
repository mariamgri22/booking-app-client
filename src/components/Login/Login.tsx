import React, { useState } from "react";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../feature/usersSlice";
import { AppDispatch } from "../../store";
import { FormLoginValues } from "../../types/FormValues";
import {
  Error,
  FormContainer,
  FormGroup,
  Input,
  Label,
  SubmitButton,
  InputContainer,
  ShowPasswordButton,
} from "./FormStyled";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const initialValues: FormLoginValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 4 characters")
      .max(32, "Password must not exceed 32 characters")
      .required("Password is required"),
  });

  const onSubmit = async (
    values: FormLoginValues,
    { setSubmitting }: FormikHelpers<FormLoginValues>
  ) => {
    await dispatch(login(values));
    await navigate("/user");
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <FormContainer>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" />
            <Error name="email" component="div" className="error" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <InputContainer>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
              />
              <ShowPasswordButton
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </ShowPasswordButton>
            </InputContainer>
            <Error name="password" component="div" className="error" />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            Submit
          </SubmitButton>
        </FormContainer>
      )}
    </Formik>
  );
};

export default LoginForm;
