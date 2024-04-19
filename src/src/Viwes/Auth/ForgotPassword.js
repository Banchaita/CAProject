import React, { useEffect, useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Auth from '../../components/Auth'
import { useDispatch, useSelector } from 'react-redux'
import toast from '../../components/common/toast'
import { forgotPassword, removeEmail, removeForgotPassword, varifyEmail } from '../../actions/auth'


const ForgotPassword = () => {
  const history = useNavigate()
  const dispatch = useDispatch()

  const [email,setEmail] = useState('')


  const forgotPasswordStatus = useSelector(state => state.auth.forgotPasswordStatus)
  const emailCheck = useSelector(state=> state.auth.emailCheck)


  const handleForgot = async()=>{
    if(email = "" || !email){
      toast.error("Plases enter a valid email address")
      return false;
    }
    dispatch(varifyEmail({'email':email}))
  }

  useEffect(()=>{
    if(emailCheck){
      if(emailCheck.status == false){
        toast.error("Email not verify")
      }
      else{
        localStorage.setItem('email',email)
        dispatch(forgotPassword({'email':email}))
      }
    }
  },[emailCheck])

  useEffect(()=>{
    if(forgotPasswordStatus){
      toast.success("Email success")
      history("/otp")
      dispatch(removeForgotPassword(null))
      dispatch(removeEmail(null))
    }
  },[forgotPasswordStatus])





  return (
    <>
      <div className='container-fluid p-0'>
        <div className="auto-height" style={{ height: '100vh' }}>
          <Auth />
          <div className="px-0 col-12 col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-between signup_right">
            <div className="forgetpassowrd-area">
              <h3 className="from-title">Forgot Password</h3>
              <Box sx={{ width: 500, maxWidth: '100%', mt: 4 }}>
                <TextField fullWidth label="Email" id="email" onChange={(e)=>setEmail(e.target.value)} />
              </Box>
              <Box sx={{ width: 500, maxWidth: '100%', mt: 4 }}>
                <Button variant="outlined" size="large" className='login-btn' onClick={()=>handleForgot()}>
                  Submit
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
