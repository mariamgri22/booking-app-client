import React, { useState } from "react";
import { Formik, FormikHelpers } from "formik";
import {
  Error,
  FormContainer,
  FormGroup,
  Input,
  Label,
  SubmitButton,
  TextArea,
  InputContainer,
  ShowPasswordButton,
} from "../Login/FormStyled";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import * as Yup from "yup";
import { FormValues, RegisterFormProps } from "../../types/FormValues";

const RegisterForm: React.FC<RegisterFormProps> = ({ handleBooking }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const initialValues: FormValues = {
    username: "",
    telephone: "+374",
    email: "",
    password: "",
    confirmPassword: "",
    reminder: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    telephone: Yup.string()
      .matches(/^\+374/, "Telephone must start with +374")
      .min(8, "Telephone must be at least 8 characters")
      .required("Telephone is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 4 characters")
      .max(32, "Password must not exceed 32 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    reminder: Yup.string(),
    comment: Yup.string(),
  });

  const reminderOptions = [
    { label: "Per 1 hour", value: "option1" },
    { label: "Per 2 hours", value: "option2" },
    { label: "Per 3 hours", value: "option3" },
  ];

  const onSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    handleBooking(values, setSubmitting);
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
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" name="username" />
            <Error name="username" component="div" className="error" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="telephone">Telephone</Label>
            <Input
              type="text"
              id="telephone"
              name="telephone"
              placeholder="+374"
            />
            <Error name="telephone" component="div" className="error" />
          </FormGroup>

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

          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <Error name="confirmPassword" component="div" className="error" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="reminder">Reminder</Label>
            <Input
              as="select"
              id="reminder"
              name="reminder"
              style={{ width: "100%" }}
            >
              <option value="" disabled>
                Select a reminder
              </option>
              {reminderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Input>
            <Error name="reminder" component="div" className="error" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="comment">Comment</Label>
            <TextArea as="textarea" id="comment" name="comment" />
            <Error name="comment" component="div" className="error" />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            Submit
          </SubmitButton>
        </FormContainer>
      )}
    </Formik>
  );
};

export default RegisterForm;
