import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NEXT_PUBLIC_BASE_URL } from '../../../api_url';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import cookies from 'js-cookies';
import jwt from 'jsonwebtoken';
const Index = () => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const token = cookies.getItem('token');

    if (token) {
      try {
        const decodedToken = jwt.decode(token);
        console.log('decodedToken', decodedToken);
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
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [otpTimer, setOTPTimer] = useState(300); // 300 seconds = 5 minutes
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    // Function to decrease the timer every second
    const countdown = setInterval(() => {
      if (otpTimer > 0) {
        setOTPTimer(otpTimer - 1);
      } else {
        clearInterval(countdown); // Stop the timer when it reaches 0
        // You can also add logic to handle the expiration of the OTP here
      }
    }, 1000); // 1000 milliseconds = 1 second

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(countdown);
    };
  }, [otpTimer]);

  // Format the timer value into minutes and seconds
  const minutes = Math.floor(otpTimer / 60);
  const seconds = otpTimer % 60;
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const resetPassword = async (value) => {
    try {
      await axios.post(`${NEXT_PUBLIC_BASE_URL}/users/reset-password`, value);
      toast.success('Password reset is sucessful', {
        position: toast.POSITION.TOP_CENTER,
      });
      router.push('/Signin');
    } catch (error) {
      toast.error('Error please check it!', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const getUser = async () => {
    try {
      const {data} = await axios.get(
        `${NEXT_PUBLIC_BASE_URL}/users/get-user-by-id/${userId}`,
      );
      setValue('email', data?.user?.email);
    } catch (err) {
      console.log('error', err);
    }
  };
  useEffect(() => {
    if (userId) {
      getUser();
    }
  }, [userId]);

  return (
    <div className="bg-img">
      <div className="content">
        <header>Reset Password</header>
        <form onSubmit={handleSubmit(resetPassword)}>
          <div className="field space">
            <span className="fa fa-envelope" />
            <input
              type="text"
              required=""
              placeholder="Email"
              {...register('email')}
              readOnly
            />
          </div>
          <div className="field space">
            <span className="fa fa-key" />
            <input
              type="text"
              required=""
              placeholder="OTP"
              {...register('otp')}
            />
            <div className="timer">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
          </div>
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
          {/* <p className="err-msg">{errors.password?.message}</p> */}
          <div className="field space">
            <span className="fa fa-lock" />
            <input
              type="password"
              className="pass-key"
              required=""
              name="cpassword"
              placeholder="Confirm Password"
            />
            <span className="show">SHOW</span>
          </div>
          {/* <p className="err-msg">{errors.password?.message}</p> */}
          <div className="field space">
            <input type="submit" defaultValue="SUBMIT" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
