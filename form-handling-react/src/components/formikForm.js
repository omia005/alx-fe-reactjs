import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";



  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form submitted:", values);
        resetForm();
      }}
    >
      {() => (
        <Form style={{ maxWidth: "400px" }}>
          <h2>Register</h2>

          <div>
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              name="username"
              id="username"
            />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              id="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}
