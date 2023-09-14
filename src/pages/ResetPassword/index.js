import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Index = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
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

  return (
    <div className="bg-img">
      <div className="content">
        <header>Forget Password</header>
        <form action="#">
          <div className="field space">
            <span className="fa fa-envelope" />
            <input type="text" required="" placeholder="Email" />
          </div>  
          <div className="field space">
      <span className="fa fa-key" />
      <input type="text" required="" placeholder="OTP" />
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
        {...register('password', { required: 'Password is required' })}
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


  )
}

export default Index