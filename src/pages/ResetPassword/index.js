import React, { useEffect } from 'react';

const index = () => {

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
          </div>  
          <div className="field space">
            <span className="fa fa-lock" />
            <input
              type="password"
              className="pass-key"
              required=""
              name="password"
              placeholder="Password"
              />
             
            <span className="show">SHOW</span>
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

export default index