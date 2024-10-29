import React, { useEffect, useState } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, RegisterUser } from "../services/api";
import { toast } from "react-toastify";
import { toastConfig } from "../components/toast/toastConfig";
import BasicModal from "../components/BasicModal";

const schema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});      

const Login = React.memo(({ Open, handleClose }) => {
  const dispatch = useDispatch();
  const { isAuthorized, error, status } = useSelector((state) => state.login);

  const [mode, setMode] = useState("login");

  useEffect(() => {
    if (error) {
      toast.error(error, toastConfig.error);
    }

    if (isAuthorized) {
      toast.success("sdsdsd", toastConfig.success);
      handleClose();

    }
  }, [error, isAuthorized]);

  const onSubmit = (values) => {
    const { email, password, userName } = values;
    console.log(email, password, userName);
    if (mode === "login") {
      dispatch(loginUser({ email, password }));
    } else {
      dispatch(RegisterUser({ email, password, name:userName }));
    }
  };

  return (
    <div>
      <BasicModal
        isOpen={Open}
        onClose={() => {
          handleClose();
        }}
      >
        <div className="login">
          <h2 style={{ margin: "20px 0px" }}>Welcome To TMS !</h2>
          <Formik
            validationSchema={schema}
            onSubmit={onSubmit}
            initialValues={{
              email: "",
              password: "",
              userName: "",
            }}
          >
            {({ handleSubmit, resetForm }) => (
              <Form className="custom-form" noValidate onSubmit={handleSubmit}>
                {mode === "register" && (
                  <Form.Field className="form-field">
                    <label>User Name</label>
                    <Field
                      name="userName"
                      placeholder="Name"
                      type="text"
                      as="input"
                      required
                    />
                    <div className="error-message">
                      <ErrorMessage
                        name="userName"
                        component="div"
                        className="text-danger mt-2"
                      />
                    </div>
                  </Form.Field>
                )}
                <Form.Field className="form-field">
                  <label>Email address</label>
                  <Field
                    name="email"
                    placeholder="Email"
                    type="email"
                    as="input"
                    required
                  />
                  <div className="error-message">
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger mt-2"
                    />
                  </div>
                </Form.Field>
                <Form.Field className="form-field">
                  <label>Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    as="input"
                  />
                  <div className="error-message">
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger mt-2"
                    />
                  </div>
                </Form.Field>
                <Button primary type="submit" disabled={status === "loading"}>
                  {mode === "login" ? "Sign In" : "Sign Up"}
                </Button>
                <Message>
                  {mode === "login" ? (
                    <>
                      New to us?{" "}
                      <a
                        onClick={() => {
                          resetForm();
                          setMode("register");
                        }}
                      >
                        Sign Up
                      </a>
                    </>
                  ) : (
                    <>
                      Already have an account?{" "}
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          resetForm();
                          setMode("login");
                        }}
                      >
                        Sign In
                      </a>
                    </>
                  )}
                </Message>{" "}
              </Form>
            )}
          </Formik>
        </div>
      </BasicModal>
    </div>
  );
})

export default Login;
