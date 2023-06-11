import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  username: string;
  telephone: string;
  email: string;
  password: string;
  confirmPassword: string;
  reminder: string;
  comment: string;
}

const RegisterForm: React.FC = () => {
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
      .min(4, "Password must be at least 4 characters")
      .max(32, "Password must not exceed 32 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    reminder: Yup.string(),
    comment: Yup.string(),
  });

  const reminderOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     telephone: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //     comment: "",
  //   },
  //   onSubmit: (values) => {
  //     const formData = new FormData();
  //     formData.append("username", values.username);
  //     formData.append("telephone", values.telephone);
  //     formData.append("email", values.email);
  //     formData.append("password", values.password);
  //     formData.append("confirmPassword", values.confirmPassword);
  //     formData.append("comment", values.comment);

  //     createUser(formData);
  //   },
  //   validationSchema: validationSchema,
  // });


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      // onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="telephone">Telephone</label>
            <Field
              type="text"
              id="telephone"
              name="telephone"
              placeholder="+374"
            />
            <ErrorMessage name="telephone" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="error"
            />
          </div>

          <div>
            <label htmlFor="reminder">Reminder</label>
            <Field as="select" id="reminder" name="reminder">
              <option value="" disabled>
                Select a reminder
              </option>
              {reminderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
            <ErrorMessage name="reminder" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="comment">Comment</label>
            <Field as="textarea" id="comment" name="comment" />
            <ErrorMessage name="comment" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
