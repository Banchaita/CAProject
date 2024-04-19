import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button,FormControl, IconButton,InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Auth from '../../components/Auth'
import { useDispatch, useSelector } from 'react-redux';
import toast from '../../components/common/toast';
import { loginAction } from '../../actions/auth';


const Login = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false)
  const [email,setEmail] = useState();
  const [password,setPassword] = useState()

  const is_authenticated = useSelector(state => state.auth.is_authenticated)
  const loginMessage = useSelector(state => state.auth.loginMessage)
 
 
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () =>{
    // if(email == "" || password == ''){
    //   toast.error("Please enter a valid email address or password to proceed")
    //   return false;
    // }
    // dispatch(loginAction({email,password}))
    history('/dashboard')
  }


  useEffect(()=>{
    if(is_authenticated){
      toast.success("Login Success")
      history('/dashboard')
    }
    if(loginMessage){
      console.log("loginMessage",loginMessage)
      toast.error(loginMessage)
      let data = {data:{message:null}}
    }
  },[is_authenticated,loginMessage])





  return (
    <>
      
        <div className="container p-0">
          <div className="auto-height" style={{ height: '100vh' }}>
            <Auth />
            <div className="px-0 col-6 col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-between signup_right">
              <div className="login-area">
                <h3 className="from-title">Login</h3>
                <div className="form-area">
                  <Box sx={{ width: 500, maxWidth: '100%', mt: 4 }}>
                    <TextField fullWidth label="Email" id="email" onChange={(e)=> setEmail(e.target.value)} />
                  </Box>
                  <Box sx={{ width: 500, maxWidth: '100%' }}>
                    <FormControl sx={{ mt: 4, width: '57ch' }} variant='outlined'>
                      <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e)=>setPassword(e.target.value)}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                  </Box>
                  <Box sx={{ width: 500, mt: 4 }}>
                    <div className="text-forgotpassword">
                      <p>
                        <Link to={'/forgotpassword'}>Forgot Password?</Link>

                      </p>
                    </div>
                  </Box>
                  <Box sx={{ width: 500, maxWidth: '100%', mt: 4 }}>
                    <Button variant="outlined" size="large" className='login-btn' onClick={()=>handleLogin()}>
                      Login
                    </Button>
                  </Box>
                 
                <Box sx={{ width: 500, maxWidth: '100%', mt: 4 }}>
                  <p className='login-footer-text'>Don't have an account?
                    <span> <Link to={'/signup'}>Signup Now</Link></span>
                  </p>
                </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Login
