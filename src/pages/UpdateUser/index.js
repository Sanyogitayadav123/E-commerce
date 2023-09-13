import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import NEXT_PUBLIC_BASE_URL from "../../../api_url";
import cookies from "js-cookies";
import jwt from "jsonwebtoken"
import Image from "next/image";
import blankUser from "../../../public/user-img.jpeg"
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

});

const Index = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = cookies.getItem("token");

    if (token) {
      try {
        const decodedToken = jwt.decode(token);
        if (decodedToken) {
          const userId = decodedToken._id;
          setUserId(userId)
        } else {
          console.error('Failed to decode token.');
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      console.warn('Token not found in cookies.');
    }
  }, []);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateSchema),
  });

  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImageData, setSelectedImageData] = useState();

  const getUser = async () => {
    try {
      const res = await axios.get(`${NEXT_PUBLIC_BASE_URL}/users/get-user-by-id/${userId}`)
      const { name, email, phone, password, profileImage } = res.data.user;
      setValue("name", name);
      setValue("email", email)
      setValue("phone", phone);
      setSelectedImage(profileImage);
      setSelectedImageData(null);
      setLoading(false);
    }
    catch (err) {
      console.log('error', err)
    }
  }
  useEffect(() => {
    if (userId) {
      getUser();
    }
  }, [userId]);


  const profileUpdate = async (value) => {
    const { name, email, phone, profileImage } = value;
    console.log('value', value)
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("userImage", selectedImageData);
      const res = await axios.put(`${NEXT_PUBLIC_BASE_URL}/users/update-user/${userId}`, formData);
      setLoading(false)
    }
    catch (err) {
      setLoading(false)
      console.log("error", err)
    }
  }

  return (
    <div className="bg-img">
      <div className="content">
        <form className="update-form" onSubmit={handleSubmit(profileUpdate)}>
          <div className="user-pic">
            <label htmlFor="file-upload" className="file-upload-label">
              <input
                type="file"
                onChange={(event) => {
                  setSelectedImageData(event.target.files[0]);
                  setSelectedImage(null);
                }}
              />
              <div className="file-upload-icon">
                <i className="fa fa-camera"></i>
              </div>
            </label>
            <div className="p-img--box">
              {/* Check if selectedImageData is available */}
              {selectedImageData && (
                <div>
                  {/* Render the selected image */}
                  <img
                    alt="Selected Image"
                    width={100}
                    height={100}
                    src={URL.createObjectURL(selectedImageData)} // Use createObjectURL to generate the image URL
                  />
                </div>
              )}
              {selectedImage && (
                <div className="uploaded-img">
                  <img
                    alt="Uploaded Image"
                    width={100}
                    height={100}
                    src={`${NEXT_PUBLIC_IMAGES}/public/userImage/${selectedImage}`}
                  />
                </div>
              )}
              {!selectedImageData && !selectedImage && (
                <Image
                  src={blankUser}
                  width={100}
                  height={100}
                  alt="Default Image"
                />
              )}
            </div>
          </div>

          <div className="field space">
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
              readOnly
            />
          </div>
          {/* <p className="err-msg">{errors.email?.message}</p> */}
          <div className="field space">
            <span className="fa fa-phone" />
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
              type="password"
              className="pass-key"
              required=""
              placeholder="Password"
            />
            <span className="show">SHOW</span>
          </div>
          <div className="field space">
            <input type="submit" />
          </div>
        </form>
      </div >
    </div >
  );
};

export default Index;
