import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, TextField, FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton } from '@mui/material'
import Auth from '../../components/Auth'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { resetPassword } from '../../actions/auth';
import toast from '../../components/common/toast'



const ResetPassword = () => {
    const history = useNavigate()
    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [comfime_password, setComfimePassword] = useState('')

    const ressetPassword = useSelector(state => state.auth.ressetPassword)

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleReset  = ()=>{
        if(password == "" || !password){
            toast.error("Please enter password")
            return false;
        }
        if(password !== comfime_password){
            toast.error("Password & Comfirm Password should Be not Same")
        }

        let data={
            email:localStorage.getItem('email',email),
            password:password
        }
        dispatch(ressetPassword(data))
        toast.success("New password carete successful")
        history('/')
    }





    return (
        <>
            <div className='container-fluid p-0'>
                <div className="auto-height" style={{ height: '100vh' }}>
                    <Auth />
                    <div className="px-0 col-12 col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-between signup_right">
                        <div className="forgetpassowrd-area">
                            <h3 className="from-title">Reset Password</h3>
                            <Box sx={{ width: 500, maxWidth: '100%', mt: 4 }}>
                                <TextField fullWidth label="Email" id="email"  onChange={(e)=>setEmail(e.target.value)}/>
                            </Box>
                            <Box sx={{ width: 500, maxWidth: '100%' }}>
                                <FormControl sx={{ mt: 4, width: '57ch' }} variant='outlined'>
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        onChange={(e)=>setPassword(e.target.value)}
                                        type={showPassword ? 'text' : 'password'}
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
                            <Box sx={{ width: 500, maxWidth: '100%' }}>
                                <FormControl sx={{ mt: 4, width: '57ch' }} variant='outlined'>
                                    <InputLabel htmlFor="outlined-adornment-password"> Comfirm Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        onChange={(e)=>setComfimePassword(e.target.value)}
                                        type={showPassword ? 'text' : 'password'}
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
                                <Button variant="outlined" size="large" className='login-btn' onClick={() => handleReset()}>
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

export default ResetPassword
