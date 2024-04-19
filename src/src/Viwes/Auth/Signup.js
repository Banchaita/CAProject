import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Auth from '../../components/Auth'
import { registerUser } from '../../actions/auth'
import toast from '../../components/common/toast'





const Signup = () => {
    const history = useNavigate()
    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false)
    const [username,setUserName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const handleSignUp = async()=>{
        if(username == "" || email == "" || password == ""){
            toast.error("Please enter vaild all flied")
            return false
        }

        localStorage.setItem('username',username)
        localStorage.setItem('email',email)

        let data ={
            username:username,
            email:email,
            password:password
        }
        dispatch(registerUser(data))
    }












    return (
        <>
            <div className="container-fluid p-0">
                <div className="auto-height" style={{ height: '100vh' }}>
                    <Auth />
                    <div className="px-0 col-12 col-lg-6 col-md-12 d-flex flex-column aliign-items-center justify-content-between signup_right">
                        <div className="signup-area">
                            <h3 className="from-title">Signup</h3>
                            <div className="form-area">
                                <Box sx={{ width: 500, maxWidth: '100%', mt: 4 }}>
                                    <TextField fullWidth label="Name" id="name"  onChange={(e)=>setUserName(e.target.value)}/>
                                </Box>
                                <Box sx={{ width: 500, maxWidth: '100%', mt: 4 }}>
                                    <TextField fullWidth label="Email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                                </Box>
                                <Box sx={{ width: 500, maxWidth: '100%' }}>
                                    <FormControl sx={{ mt: 4, width: '57ch' }} variant='outlined'>
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                                <Box sx={{ width: 500, maxWidth: '100%', mt: 4 }}>
                                    <Button variant="outlined" size="large" className='login-btn' onClick={()=>handleSignUp()}>
                                        Signup
                                    </Button>
                                </Box>
                                <Box sx={{ width: 500, maxWidth: '100%', mt: 4 }}>
                                    <p className='signup-footer-text'>Already have an account?
                                        <span> <Link to={'/'}>Login now</Link></span>
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

export default Signup
