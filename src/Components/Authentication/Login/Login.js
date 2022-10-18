import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const loginValidate = (formValue) => {
  const errMsg = {};
  const validEmail = /^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$/;
  const validPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,15}$/;

  if (!formValue.email) {
    errMsg.email = "Required Field";
  } else if (!validEmail.test(formValue.email)) {
    errMsg.email = "Wrong Pattern small characters include @";
  }

  if (!formValue.password) {
    errMsg.password = "Required Field";
  } else if (!validPass.test(formValue.password)) {
    errMsg.password =
      "Wrong Pattern start with capital letter minimum 8 characters";
  }
  console.log("Error ", errMsg);
  return errMsg;
};

export default function Login() {
  const navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit: (formValue) => {
      console.log("Submitted Value: ", formValue);
      axios
        .post("https://prod-crud.herokuapp.com/login", formValue)
        .then((res) => {
          // alert("Data submitted successfully");
          console.log("Axios res", res);
          window.sessionStorage.setItem("TokenValue", res.data.token);
          navigate("/profile");
        })
        .catch((err) => {
          console.log("Axios err: ", err);
        });
    },
  });
  return (
    <div className="login">
      <h3>Please Login before Proceeding</h3>
      <form className="login__form" onSubmit={formik.handleSubmit}>
        {/* <h3 className="login__heading">Login</h3> */}

        <label>
          Email:
          <br />
          <input
            placeholder="Enter your Email"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.touched.email && formik.errors.email ? (
          <span>{formik.errors.email}</span>
        ) : null}
        <br />
        <label>
          Password:
          <br />
          <input
            placeholder="Enter your Password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.touched.password && formik.errors.password ? (
          <span>{formik.errors.password}</span>
        ) : null}
        <br />

        <button className="login__button" type="submit" value="Submit">
          Login
        </button>
      </form>
      <h5 className="login__h5">
        Not a member{" "}
        <Link to={"/registration"}>
          <span>Register </span>
        </Link>
        Here!
      </h5>
    </div>
  );
}
