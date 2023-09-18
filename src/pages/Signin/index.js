import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router';
import Cookies from 'js-cookies'
import { useSession, signIn, signOut } from "next-auth/react";
import { NEXT_PUBLIC_BASE_URL } from '../../../api_url';
import Link from 'next/link';

const Index = () => {
  const { data: session } = useSession()
  const [emailError, setEmailError] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const login = async (value) => {
    try {
      const { data } = await axios.post(`${NEXT_PUBLIC_BASE_URL}/users/signin`, value)
      console.log('data', data)
      Cookies.setItem('token', data?.token)
      router.push('/')
    } catch (error) {
      if (error?.response?.data?.message || error?.response?.data?.passwordError) {
        setEmailError(error?.response?.data?.message)
        setPasswordError(error?.response?.data?.passwordError)
      }
    }
  }
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    if (session) {
      console.log('session1', session)
      socialLogin(session)
      console.log('session222', session)
    }
  }, [session])
  const socialLogin = async (session) => {
    try {
      const { data } = await axios.post(
        `${NEXT_PUBLIC_BASE_URL}/users/signin`, {
        email: session?.user?.email,
        name: session?.user?.name,
      });
      console.log('data', data)
      router.push("/");
      setLoading(false)
    } catch (err) {
      console.log("error", err);
    }
  }
  return (
    <div className="bg-img">
      <div className="content">
        <header>Login Form</header>
        <form onSubmit={handleSubmit(login)}>
          <div className="field">
            <span className="fa fa-user" />
            <input type="text" required="" placeholder="Email or Phone" {...register('email', { required: 'Email is required' })}
            />

          </div>
          {emailError && <p className='text-red-500'>{emailError}</p>}
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          <div className="field space">
            <span className="fa fa-lock" />
            <input
              type={passwordVisible ? 'text' : 'password'}
              className="pass-key"
              required=""
              placeholder="Password"
              {...register('password', { required: 'Password is required' })}
            />
            <span className="show" onClick={togglePasswordVisibility}>
              {passwordVisible ? 'HIDE' : 'SHOW'}
            </span>
          </div>
          {passwordError && <p className='text-red-500'>{passwordError}</p>}
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          <div className="pass">
            <Link href="/ForgetPassword">Forgot Password?</Link>
          </div>
          <div className="field">
            <input type="submit" defaultValue="LOGIN" />
          </div>
        </form>
        <div className="login">Or login with</div>
        <div className="links">
          <div className="facebook">
            <i className="fab fa-facebook-f">
              <span>Facebook</span>
            </i>
          </div>
          <div className="instagram">
            <i className="fab fa-instagram">
              <span>Instagram</span>
            </i>
          </div>
          <div className="google">
            <i className="fab fa fa-google">
              <span></span>
              <button onClick={() => signIn()}>Google</button>
            </i>
          </div>
        </div>
        <div className="signup">
          Don&apos;t have account?
          <a href="#">Signup Now</a>
        </div>
      </div>
    </div>
  )
}

export default Index