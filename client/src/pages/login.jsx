import React, { useEffect, useState } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastConfig } from "../components/toast/toastConfig";
import BasicModal from "../components/BasicModal";

function Login() {
  const dispatch = useDispatch();
  const { isAuthorized, error, status } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [show, setShow] = useState(true);
  const schema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  useEffect(() => {
    if (error) {
      console.log(error);
      toast.error(error, toastConfig.error);
    } else if (isAuthorized) {
      toast.success(status, toastConfig.success);
      setShow(false);
    }
  }, [error, isAuthorized]);

  const onSubmit = (values) => {
    const { email, password } = values;
    dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      {show && (
        <BasicModal>
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
                <Form
                  className="custom-form"
                  noValidate
                  onSubmit={handleSubmit}
                >
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
                          href="#"
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
                          href="#"
                          onClick={() => {
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
      )}
    </div>
  );
}

export default Login;
