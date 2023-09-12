import React, { useState, useEffect } from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from yup;
import useForm from 'react-hook-form';
import { useRouter } from "next/router";

const index = () => {
  const { register, handleSubmit } = useForm()
  return (
    <div className="bg-img">
      <div className="content">
        {/* <header> Form</header> */}
        <form className="update-form">
          <div className="user-pic">
            <label htmlFor="file-upload" className="file-upload-label">
              <input
                type="file"
                id="file-upload"
                name="profile-pic"
                className="file-upload-input"
              />
              <div className="file-upload-icon">
                <i className="fa fa-camera"></i>
              </div>
              <div className="file-upload-text">Upload Photo</div>
            </label>
          </div>

          <div className="field space">
            <span className="fa fa-user" />
            <input
              type="text"
              required=""
              placeholder="Full Name"
              name="name"
            //   value={user.name}
            //   {...register("name", {
            //     onChange: (e) => {
            //       handleChange(e);
            //     },
            //   })}
            />
          </div>
          {/* <p className="err-msg">{errors.name?.message}</p> */}
          <div className="field space">
            <span className="fa fa-envelope" />
            <input
              type="text"
              required=""
              placeholder="Email"
              name="email"
            //   value={user.email}
            //   {...register("email", {
            //     onChange: (e) => {
            //       handleChange(e);
            //     },
            //   })}
            />
          </div>
          {/* <p className="err-msg">{errors.email?.message}</p> */}
          <div className="field space">
            <span className=" fa fa-phone" />
            <input
              type="text"
              required=""
              placeholder="Phone"
              name="phone"
            //   value={user.phone}
            //   {...register("phone", {
            //     onChange: (e) => {
            //       handleChange(e);
            //     },
            //   })}
            />
          </div>
          {/* <p className="err-msg">{errors.phone?.message}</p> */}
          <div className="field space">
            <span className="fa fa-lock" />
            <input
              type="password"
              className="pass-key"
              required=""
              placeholder="Password"
            //   name="password"
            //   value={user.password}
            //   {...register("password", {
            //     onChange: (e) => {
            //       handleChange(e);
            //     },
            //   })}
            />
            <span className="show">SHOW</span>
          </div>
          {/* <p className="err-msg">{errors.password?.message}</p> */}

          <div className="field space">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
