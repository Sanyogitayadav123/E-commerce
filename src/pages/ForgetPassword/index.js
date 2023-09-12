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
            <input type="submit" defaultValue="SUBMIT" />
          </div>
        </form>
      </div>
    </div>


  )
}

export default index