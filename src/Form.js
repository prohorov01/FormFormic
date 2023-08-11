import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

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
        <MyTextInput label="Your name" id="name" name="name" type="text" />

        <MyTextInput label="Your mail" id="email" name="email" type="email" />

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

        <MyCheckbox name="terms">
          Do you agree with the privacy policy?
        </MyCheckbox>

        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default CustomForm;
