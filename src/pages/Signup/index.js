import React, { useEffect } from "react";

const SignUp = () => {
  return (
    <div className="bg-img">
      <div className="content">
        <header>Registration Form</header>
        <form action="#">
          <div className="field">
            <span className="fa fa-user" />
            <input type="text" required="" placeholder="Full Name" />
          </div>
          <div className="field space">
            <span className="fa fa-user" />
            <input type="text" required="" placeholder="Email" />
          </div>
          <div className="field space">
            <span className="fa fa-user" />
            <input type="text" required="" placeholder="Phone" />
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
          {/* <div className="pass">
            <a href="#">Forgot Password?</a>
          </div> */}
          <div className="field space">
            <input type="submit" defaultValue="REGISTER" />
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
