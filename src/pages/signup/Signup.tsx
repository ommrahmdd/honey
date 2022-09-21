import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Header from "../../components/Header";
import { userSignUp } from "../../firebase/users";
import { useHistory } from "react-router-dom";
type InitialTypes = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Signup() {
  let formInitialValue: InitialTypes = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  let validate = (values: any) => {
    let errors: InitialTypes = {
      fullName: "",
      password: "",
      confirmPassword: "",
      email: "",
    };
    if (!values.fullName) errors.fullName = "Name Is Required";
    if (!values.email) errors.email = "Email Is Required";
    if (!values.password) errors.password = "Password Is Required";
    if (!values.confirmPassword)
      errors.confirmPassword = "Confirm Password Is Required";
    if (values.password != values.confirmPassword)
      errors.confirmPassword = "Passwords are not the same";
    if (
      !errors.email &&
      !errors.confirmPassword &&
      !errors.fullName &&
      !errors.password
    )
      return {};
    return errors;
  };
  let [error, setError] = useState<string>("");
  let history = useHistory();
  return (
    <div className="authPage">
      <Header header={["home", " /  ", "sign up"]} />
      <div className="container">
        <div className="authPage__content">
          <Formik
            initialValues={formInitialValue}
            validate={validate}
            onSubmit={(values, { setSubmitting }) => {
              userSignUp(values).then((data) => {
                switch (data) {
                  case "Firebase: Password should be at least 6 characters (auth/weak-password).":
                    setError("Password should be at least 6 characters");
                    break;
                  case "Firebase: Error (auth/email-already-in-use).":
                    setError("Email is Exist !");
                    break;
                  case "success":
                    window.scrollTo(0, 0);
                    history.push("/");
                    break;
                }

                setTimeout(() => {
                  setError("");
                }, 3000);
              });
            }}
          >
            {({ isSubmitting }) => (
              <Form className="authPage__content-form">
                <div className="">
                  <label htmlFor="fullName">Full Name</label>
                  <Field
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="form__input"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="errorMessage"
                  />
                </div>
                <div className="">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="form__input"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="errorMessage"
                  />
                </div>
                <div className="">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    className="form__input"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="errorMessage"
                  />
                </div>
                <div className="">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="form__input"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="errorMessage"
                  />
                </div>
                <button className="btn primaryBtn" type="submit">
                  Sign up
                </button>
                {error && <div className="errorMessage">{error}</div>}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
