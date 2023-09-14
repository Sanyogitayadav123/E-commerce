import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NEXT_PUBLIC_BASE_URL } from '../../../api_url';
import { toast } from 'react-toastify';

const Index = () => {
  const[emailError,setEmailError] = useState('')
  const{register,handleSubmit} = useForm()

  const forgotePassword = async(value)=>{
    try {
      await axios.post(`${NEXT_PUBLIC_BASE_URL}/users/forgot-password`,value)
      toast.success('Otp sent sucessful', {
        position: toast.POSITION.TOP_CENTER
    });
    } catch (error) {
      toast.error('Unsucessful!', {
        position: toast.POSITION.TOP_CENTER
    });
      setEmailError(error?.response?.data?.message)
    }
  }


  return (
    <div className="bg-img">
      <div className="content">
        <header>Forget Password</header>
        <form onSubmit={handleSubmit(forgotePassword)}>
          <div className="field space">
            <span className="fa fa-envelope" />
            <input type="text" required="" placeholder="Email" {...register('email')} />
          </div> 
          {emailError&&<p className='text-red-500'>{emailError}</p>}      
          <div className="field space">
            <input type="submit" defaultValue="SUBMIT" />
          </div>
        </form>
      </div>
    </div>


  )
}

export default Index