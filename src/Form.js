import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};

//   if (!values.name) {
//     errors.name = "Obligatory field!";
//   } else if (values.name.length < 2) {
//     errors.name = "Minimum 2 characters to fill";
//   }
//   if (!values.email) {
//     errors.email = "Obligatory field!";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "Wrong email address";
//   }
//   return errors;
// };

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      amount: 0,
      currency: "",
      text: "",
      terms: false,
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2>Send a donation</h2>
      <label htmlFor="name">Your name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.name && formik.touched.name ? (
        <di className="error" v>
          {formik.errors.name}
        </di>
      ) : null}
      <label htmlFor="email">Your mail</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.email && formik.touched.emailf ? (
        <di className="error" v>
          {formik.errors.email}
        </di>
      ) : null}

      <label htmlFor="amount">Quantity</label>
      <input
        id="amount"
        name="amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.amount && formik.touched.amount ? (
        <di className="error" v>
          {formik.errors.amount}
        </di>
      ) : null}
      <label htmlFor="currency">Currency</label>
      <select
        id="currency"
        name="currency"
        value={formik.values.currency}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="">Select currency</option>
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="RUB">EUR</option>
      </select>
      {formik.errors.currency && formik.touched.currency ? (
        <di className="error" v>
          {formik.errors.currency}
        </di>
      ) : null}
      <label htmlFor="text">Your message</label>
      <textarea
        id="text"
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.text && formik.touched.text ? (
        <div className="error">{formik.errors.text}</div>
      ) : null}
      <label className="checkbox">
        <input
          name="terms"
          type="checkbox"
          value={formik.values.terms}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        Do you agree with the privacy policy?
      </label>
      {formik.errors.terms && formik.touched.terms ? (
        <di className="error" v>
          {formik.errors.terms}
        </di>
      ) : null}
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
