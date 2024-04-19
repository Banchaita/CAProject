import React, { useState } from 'react'
import Auth from '../../components/Auth'
import { Box, Button, TextField, FormControl, OutlinedInput, InputLabel, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import toast from '../../components/common/toast'
import { changePassword } from '../../actions/auth';




const ChangePassword = () => {
    const history = useNavigate()
    const dispatch = useDispatch()


    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [old_password,setOldPassword] = useState('')
    const [new_password, setNewPassword] = useState('')
    const [comfime_password, setComfimePassword] = useState('')
    const [user_id, setUserID] = useState('')

    let changePassword = useSelector((state)=>state.auth.changePassword)

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlechangePassword =(admin_id) => {
        if(old_password !== old_password){
            toast.error("Old Password not some")
          return false
        }
      if (old_password === "" || new_password === "" || comfime_password === "") {
        toast.error("Please Fill Password & Confirm Password to Proceed...")
        return false
      }
      if (new_password !== comfime_password) {
        toast.error("Password & Confirm Password Should Be Same")
        return false
      }
      let data = {
        old_password: old_password,
        new_password: new_password,
        user_id:user_id
      }
      dispatch(changePassword(data))
      history('/')
      toast.success("Password has been changed")
    }

    const handleReset =()=>{
        
    }
    

    return (
        <>
            <div className="conationer-fluid p-0">
                <div className="auto-height" style={{ height: '100vh' }}>
                    <Auth />
                    <div className="px-0 col-12 col-lg-6 col-md-12 d-flex flex-column align-items-center justify-content-between signup_right">
                        <div className="forgetpassword_area">
                            <h3 className="from-title">Change Password</h3>
                            <Box sx={{ width: 500, maxWidth: '100%', mt: 4 }}>
                                <TextField fullWidth label="User Id" id="userId" onChange={(e) => setUserID(e.target.value)} hidden />
                            </Box>
                            <Box sx={{ width: 500, maxWidth: '100%' }}>
                                <FormControl sx={{ mt: 4, width: '57ch' }} variant='outlined'>
                                    <InputLabel htmlFor="outlined-adornment-password">Old Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        onChange={(e) => setPassword(e.target.value)}
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
                                    <InputLabel htmlFor="outlined-adornment-password">new Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        onChange={(e) => setPassword(e.target.value)}
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
                                        onChange={(e) => setComfimePassword(e.target.value)}
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

export default ChangePassword
