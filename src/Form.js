import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const CustomForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        amount: 0,
        currency: "",
        text: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "Minimum 2 characters to fill")
          .required("Obligatory field!"),
        email: Yup.string()
          .email("Wrong email address")
          .required("Obligatory field!"),
        amount: Yup.number()
          .min(5, "Minimum 5 characters to fill")
          .required("Obligatory field!"),
        currency: Yup.string().required("Obligatory field!"),
        text: Yup.string().min(10, "Minimum 10 characters to fill"),
        terms: Yup.boolean()
          .required("Obligatory field!")
          .oneOf([true], "Obligatory field!"),
      })}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className="form">
        <h2>Send a donation</h2>
        <label htmlFor="name">Your name</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage className="error" name="name" component="div" />

        <label htmlFor="email">Your mail</label>
        <Field id="email" name="email" type="email" />
        <ErrorMessage className="error" name="email" component="div" />

        <label htmlFor="amount">Quantity</label>
        <Field id="amount" name="amount" type="number" />
        <ErrorMessage className="error" name="amount" component="div" />

        <label htmlFor="currency">Currency</label>
        <Field id="currency" name="currency" as="select">
          <option value="">Select currency</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="RUB">EUR</option>
        </Field>
        <ErrorMessage className="error" name="currency" component="div" />

        <label htmlFor="text">Your message</label>
        <Field id="text" name="text" as="textarea" />
        <ErrorMessage className="error" name="text" component="div" />

        <label className="checkbox">
          <Field name="terms" type="checkbox" />
          Do you agree with the privacy policy?
        </label>
        <ErrorMessage className="error" name="terms" component="div" />

        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default CustomForm;
