import React, { useEffect,useState } from 'react'
import Auth from '../../components/Auth'
import { Link, useNavigate } from 'react-router-dom'
import OtpInput from 'react-otp-input';
import { Box, Button } from '@mui/material';
import toast from '../../components/common/toast';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword, removeForgotPassword, removeOTP, validateOtp } from '../../actions/auth';



const Otp = () => {
  const history = useNavigate()
  const dispatch = useDispatch()


  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('')


  const otpStatus = useSelector(state => state.auth.otpStatus)
  const forgotStatus = useSelector(state => state.auth.forgotStatus)




  const handleOtp = async () => {
    if (otp == "" || !otp) {
      toast.error("Plases enter a valid otp")
      return false;
    }
    let data = {
      otp: otp
    }
    dispatch(validateOtp(data))
  }

  useEffect(() => {
    if (otpStatus) {
      if (otpStatus.status == false) {
        toast.error('Wrong otp ')
      } else {
        dispatch(removeForgotPassword(null))
        dispatch(removeOTP(false))
        toast.success("Success")
        history.push('/resetpassword')
      }
    }
  }, [otpStatus])
  useEffect(() => {
    if (forgotStatus) {
      setEmail(forgotStatus.email)
    }
  },)

  const handleresentotp = () => {
    alert(localStorage.getItem('email', email))
    if (forgotStatus) {
      localStorage.getItem('email', email)
    }
    dispatch(forgotPassword({ 'email': localStorage.getItem('email') }))
    toast.success('Again Email sent success')

  }





  return (
    <>
      <div className="conatiner-fluid p-0">
        <div className="auto-height" style={{ height: '100vh' }}>
          <Auth />
          <div className="px-0 col-12 clo-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-between signup_right">
            <div className="forgetpassowrd-area">
              <h3 className="from-title">OTP</h3>
              <h5 className='mt-4'>You will soon receive a 6 digit code in your email</h5>
              <div className="otp-part">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
              </div>

              <Box sx={{ width: 500, maxWidth: '100%', mt: 4 }}>
                <Button variant="outlined" size="large" className='login-btn' onClick={() => handleOtp()}>
                  Confirm
                </Button>
              </Box>
              <div class="content d-flex justify-content-center align-items-center">
                <span>Didn't get the code</span>  &nbsp;
                <Button value={localStorage.getItem('email', email)} class="text-decoration-none ms-3" onClick={() => handleresentotp(email)}>  Resend</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Otp

