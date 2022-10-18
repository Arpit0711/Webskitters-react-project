import React from "react";
import "./registration.css";
import { useFormik } from "formik";
import axios from "axios";

const RegistrationValidate = (formValue) => {
  const errMsg = {};
  const validName = /^[A-Z]{1}[A-Za-z]{1,29}$/;
  const validEmail = /^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$/;
  const validPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,15}$/;
  const validPhone = /^[6-9]{1}[0-9]{9}$/;

  if (!formValue.first_name) {
    errMsg.first_name = "Required Field";
  } else if (!validName.test(formValue.first_name)) {
    errMsg.first_name = "Wrong Pattern";
  }

  if (!formValue.last_name) {
    errMsg.last_name = "Required Field";
  } else if (!validName.test(formValue.last_name)) {
    errMsg.last_name = "Wrong Pattern";
  }

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

  if (!formValue.phone) {
    errMsg.phone = "Required Field";
  } else if (!validPhone.test(formValue.phone)) {
    errMsg.phone = "Wrong Pattern only digits maximum 10";
  }
  console.log("Error ", errMsg);
  return errMsg;
};

export default function Registration() {
  let formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
    },
    validate: RegistrationValidate,
    onSubmit: (formValue) => {
      console.log("submitted value", formValue);

      axios
        .post("https://prod-crud.herokuapp.com/register", formValue)
        .then((res) => {
          console.log("Axios res in registeration", res);
        })
        .catch((err) => {
          console.log("Axios error in registration", err);
        });
    },
  });
  return (
    <div className="reg">
      <form className="reg__form" onSubmit={formik.handleSubmit}>
        <h3 className="reg__heading">Registration</h3>
        <label>
          FirstName: <br />
          <input
            placeholder="Enter your Firstname"
            type="text"
            name="first_name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.touched.first_name && formik.errors.first_name ? (
          <span>{formik.errors.first_name}</span>
        ) : null}
        <br />
        <label>
          LastName: <br />
          <input
            placeholder="Enter your Lastname"
            type="text"
            name="last_name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.touched.last_name && formik.errors.last_name ? (
          <span>{formik.errors.last_name}</span>
        ) : null}
        <br />
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
        <label>
          phone:
          <br />
          <input
            placeholder="Enter your Phone Number"
            type="tel"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.touched.phone && formik.errors.phone ? (
          <span>{formik.errors.phone}</span>
        ) : null}
        <br />
        <button className="reg__button" type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
}
