import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import NEXT_PUBLIC_BASE_URL from "../../../api_url";

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

  const RegisterFunction = async (value) => {
    console.log('value', value)
    setLoading(true)
    try {
       await axios.post(
        `${NEXT_PUBLIC_BASE_URL}/users/signup`,value);
      router.push("/Signin");
      setLoading(false)
    } catch (err) {
      console.log("error", err);
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
              {...register("name")}
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
              {...register("email")}
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
              {...register("phone")}
            />
          </div>
          <p className="err-msg">{errors.phone?.message}</p>
          <div className="field space">
            <span className="fa fa-lock" />
       <input
        type={passwordVisible ? 'text' : 'password'}
        className="pass-key"
        required=""
        placeholder="Password"
        {...register('password')}
      />
      <span className="show" onClick={togglePasswordVisibility}>
        {passwordVisible ? 'HIDE' : 'SHOW'}
      </span>
      </div>
      <p className="err-msg">{errors.password?.message}</p>
          <div className="field space">
            {loading&&<div role="status">
  <svg
    aria-hidden="true"
    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
    />
  </svg>
  <span className="sr-only">Loading...</span>
</div>
}
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
          <Link href="/Signin">Login Now</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
