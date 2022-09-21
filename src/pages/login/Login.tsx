import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Header from "../../components/Header";
import { userLogin, userSignUp } from "../../firebase/users";
import { useHistory } from "react-router-dom";
type InitialTypes = {
  email: string;
  password: string;
};

export default function Login() {
  let formInitialValue: InitialTypes = {
    email: "",
    password: "",
  };
  let validate = (values: any) => {
    let errors: InitialTypes = {
      password: "",
      email: "",
    };
    if (!values.email) errors.email = "Email Is Required";
    if (!values.password) errors.password = "Password Is Required";

    if (!errors.email && !errors.password) return {};
    return errors;
  };
  let [error, setError] = useState<string>("");
  let history = useHistory();
  return (
    <div className="authPage">
      <Header header={["home", " /  ", "Login"]} />
      <div className="container">
        <div className="authPage__content">
          <Formik
            initialValues={formInitialValue}
            validate={validate}
            onSubmit={(values) => {
              userLogin(values.email, values.password).then((data) => {
                switch (data) {
                  case "Firebase: Error (auth/user-not-found).":
                    setError("Email is not Found");
                    break;
                  case "Firebase: Error (auth/wrong-password).":
                    setError("Wrong Password");
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
            <Form className="authPage__content-form">
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

              <button className="btn primaryBtn" type="submit">
                Login
              </button>
              {error && <div className="errorMessage">{error}</div>}
            </Form>
          </Formik>
          <div className="authPage__content-goToSignup">
            Don't hanve an acoount ? <a href="/signup">Signup</a>
          </div>
        </div>
      </div>
    </div>
  );
}
