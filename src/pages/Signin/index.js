import React, { useEffect } from 'react';

const index = () => {

  return (
    <div className="bg-img">
      <div className="content">
        <header>Login Form</header>
        <form action="#">
          <div className="field">
            <span className="fa fa-user" />
            <input type="text" required="" placeholder="Email or Phone" />
          </div>
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
          <div className="pass">
            <a href="#">Forgot Password?</a>
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
        </div>
        <div className="signup">
          Don&apos;t have account?
          <a href="#">Signup Now</a>
        </div>
      </div>
    </div>


  )
}

export default index