import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import cookies from 'js-cookies';
import jwt from 'jsonwebtoken';
import Image from 'next/image';
import blankUser from '../../../public/user-img.jpeg';
import { NEXT_PUBLIC_BASE_URL, NEXT_PUBLIC_IMAGES } from '../../../api_url';
import Avatar from '@mui/material/Avatar';
const validateSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name should be a minimum of 3 characters')
    .required('Name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  phone: yup
    .string()
    .matches(/^\d{10}$/, 'Phone number is invalid.')
    .required('Phone number is required'),
});

const Index = () => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const token = cookies.getItem('token');

    if (token) {
      try {
        const decodedToken = jwt.decode(token);
        if (decodedToken) {
          const userId = decodedToken._id;
          setUserId(userId);
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
  const [selectedImageData, setSelectedImageData] = useState(null);

  const getUser = async () => {
    try {
      const res = await axios.get(
        `${NEXT_PUBLIC_BASE_URL}/users/get-user-by-id/${userId}`,
      );
      setLoading(true);
      const { name, email, phone } = res?.data?.user;
      setValue('name', name);
      setValue('email', email);
      setValue('phone', phone);
      setSelectedImage(res?.data?.user?.userImage);
      setSelectedImageData(null);
      setLoading(false);
    } catch (err) {
      console.log('error', err);
    }
  };
  useEffect(() => {
    if (userId) {
      getUser();
    }
  }, [userId]);

  const profileUpdate = async (value) => {
    const { name, email, phone, profileImage } = value;
    console.log('value', value);
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('userImage', selectedImageData);
      const res = await axios.put(
        `${NEXT_PUBLIC_BASE_URL}/users/update-user/${userId}`,
        formData,
      );
      getUser();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('error', err);
    }
  };
  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedImageData(selectedFile);
  };

  return (
    <div className="bg-img">
      {loading && (
        <div role="status">
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
      )}
      <div className="content">
        <form className="update-form" onSubmit={handleSubmit(profileUpdate)}>
          <div className="user-pic">
            <input
              type="file"
              id="file-upload"
              className="file-upload-input"
              onChange={handleFileInputChange}
            />
            <label htmlFor="file-upload" className="file-upload-label">
              <div className="image-container">
                {selectedImage ? (
                  <img
                    alt="img"
                    src={`${NEXT_PUBLIC_IMAGES}/public/userImage/${selectedImage}`}
                  />
                ) : (
                  <Image
                    src={blankUser}
                    width={100}
                    height={100}
                    alt="Default Image"
                  />
                )}
                <div className="file-upload-icon">
                  <i className="fa fa-camera"></i>
                </div>
              </div>
            </label>

            {selectedImageData ? (
              <img
                alt="Selected Image"
                // width={100}
                // height={100}
                src={URL.createObjectURL(selectedImageData)} // Use createObjectURL to generate the image URL
              />
            ) : (
              ''
            )}
          </div>

          <div className="field space">
            <span className="fa fa-user" />
            <input
              type="text"
              required=""
              placeholder="Full Name"
              name="name"
              {...register('name')}
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
              {...register('email')}
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
              {...register('phone')}
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
            {loading && (
              <div role="status">
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
            )}
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
