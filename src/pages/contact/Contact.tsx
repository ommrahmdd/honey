import React from "react";
import { Formik, Field, Form } from "formik";
import Header from "../../components/Header";
import beeImg from "./../../assets/bee-contact.png";
let intialValue: intialValueTypes = {
  name: "",
  email: "",
  message: "",
};
type intialValueTypes = {
  name: string;
  email: string;
  message: string;
};
export default function Contact() {
  return (
    <section className="contactPage">
      <Header header={["home", " / ", " Contact"]} />
      <div className="container">
        <div className="contactPage__content">
          <div className="beeImg">
            <img src={beeImg} alt="contact image" />
          </div>
          <Formik initialValues={intialValue} onSubmit={(values) => {}}>
            <Form>
              <div className="contactForm__box">
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="contactForm__box-input"
                />
              </div>
              <div className="contactForm__box">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="contactForm__box-input"
                />
              </div>
              <div className="contactForm__box">
                <label htmlFor="message">Message</label>
                <Field
                  as="textarea"
                  type="text"
                  name="message"
                  id="message"
                  className="contactForm__box-textarea"
                />
              </div>

              <button type="submit" className="btn primaryBtn">
                Send
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}
