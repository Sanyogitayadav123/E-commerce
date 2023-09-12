import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validateSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name should be a minimum of 3 characters")
    .required("Name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number is invalid.")
    .required("Phone number is required"),
  password: yup.string().min(6, "Password should be a minimum of 6 characters"),
});
const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateSchema),
  });

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  console.log("user", user);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const RegisterFunction = async () => {
    setLoading(true)
    try {
      let res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/signup`,
        {
          name: user.name,
          email: user.email,
          phone: user.phone,
          password: user.password,
        }
      );
      router.push("/");
      console.log("res", res);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="bg-img">
      <div className="content">
        <header>Registration Form</header>
        <form onSubmit={handleSubmit(RegisterFunction)}>
          <div className="field">
            <span className="fa fa-user" />
            <input
              type="text"
              required=""
              placeholder="Full Name"
              name="name"
              value={user.name}
              {...register("name", {
                onChange: (e) => {
                  handleChange(e);
                },
              })}
            />
          </div>
          <p className="err-msg">{errors.name?.message}</p>
          <div className="field space">
            <span className="fa fa-envelope" />
            <input
              type="text"
              required=""
              placeholder="Email"
              name="email"
              value={user.email}
              {...register("email", {
                onChange: (e) => {
                  handleChange(e);
                },
              })}
            />
          </div>
          <p className="err-msg">{errors.email?.message}</p>
          <div className="field space">
            <span className=" fa fa-phone" />
            <input
              type="text"
              required=""
              placeholder="Phone"
              name="phone"
              value={user.phone}
              {...register("phone", {
                onChange: (e) => {
                  handleChange(e);
                },
              })}
            />
          </div>
          <p className="err-msg">{errors.phone?.message}</p>
          <div className="field space">
            <span className="fa fa-lock" />
            <input
              type="password"
              className="pass-key"
              required=""
              name="password"
              placeholder="Password"
              value={user.password}
              {...register("password", {
                onChange: (e) => {
                  handleChange(e);
                },
              })}
            />
            <span className="show">SHOW</span>
          </div>
          <p className="err-msg">{errors.password?.message}</p>

          <div className="field space">
            <input type="submit" />
          </div>
        </form>
        <div className="login">Or Register with</div>
        <div className="links">
          <div className="facebook">
            <i className="fab fa fa-facebook">
              <span>Facebook</span>
            </i>
          </div>
          <div className="instagram">
            <i className="fab fa fa-instagram">
              <span>Instagram</span>
            </i>
          </div>
          <div className="google">
            <i className="fab fa fa-google">
              <span></span>
              <span>Google</span>
            </i>
          </div>
        </div>
        <div className="signup">
          Already have account?
          <a href="#">Login Now</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
