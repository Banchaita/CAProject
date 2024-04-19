import { 
    REGISTER_RESPONSE,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT,
    FORGOT_PASSWORD,
    VERIFY_EMAIL,
    VERIFY_OTP,
    REMOVE_EMAIL,
    REMOVE_FORGOT_PASSWORD,
    RESET_PASSOWRD,
    CHANGE_PASSWORD,
    VALIDATE_OTP,
    RESEND_OTP,
    REMOVE_OTP
} from "./type";

import { apiCall } from "../api";
import { baseUrl } from "../constants/const";

const token = localStorage.getItem("check_token")


export const registerUser =(data)=> async dispatch =>{
    console.log("data---",data)
    let config ={
        mothod: 'POST',
        headers:{},
        url:`${baseUrl}`,
        data,
    }
    let response = await apiCall(config,dispatch)
    dispatch({
        type:REGISTER_RESPONSE,
        payload:response.data
    })
}

export const loginAction =(data)=> async dispatch =>{
    let config ={
        method: 'post',
        headers:{},
        url:`${baseUrl}`,
        data,
    }

    let response = await apiCall(config,dispatch)
    if(response.data.status){
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response
        })
    } else{
        dispatch({
            type: LOGIN_FAILED,
            payload: response
        })
    }
}

export const forgotPassword =(data)=>async dispatch=>{
    let config ={
        medthod: 'post',
        headers:{},
        url:`${baseUrl}`,
        data,
    }
    let response = await apiCall(config,dispatch)
    dispatch({
        type:FORGOT_PASSWORD,
        payload: response
    })
}

export const varifyEmail = (data)=>async dispatch =>{
    let config ={
        method:'post',
        headers:{},
        url:`${baseUrl}`,
        data,
    }
    let response = await apiCall(config,dispatch)
    dispatch({
        type: VERIFY_EMAIL,
        payload: response
    })
}

export const verifyOtp = (data)=>async dispatch =>{
    let config ={
        method:'post',
        headers:{},
        url:`${baseUrl}`,
        data,
    }
    let response = await apiCall(config,dispatch)
    dispatch({
        type:VERIFY_OTP,
        payload: response.data
    })
}

export const validateOtp = (data)=> async dispatch =>{
    let config ={
        medthod: 'post',
        headers:{},
        url:`${baseUrl}`,
        data,
    }
    let response = await apiCall(config,dispatch)
    dispatch({
        type: VALIDATE_OTP,
        payload: response.data
    })
}

export const resendOtp = (data) =>async dispatch=>{
    let config ={
        medthod:'post',
        headers:{},
        url:`${baseUrl}`,
        data,
    }
    let response = await apiCall(config,dispatch)
    dispatch({
        type: RESEND_OTP,
        payload: response.data
    })
}

export const resetPassword = (data)=>async dispatch=>{
    let config ={
        method:'post',
        headers:{},
        url:`${baseUrl}`,
        data,
    }

    let response = await apiCall(config,dispatch)
    dispatch({
        type: RESET_PASSOWRD,
        payload: response
    })
}


export const changePassword =(data)=>async dispatch=>{
    let config ={
        method:'post',
        headers:{Authorization: `Bearer ${token}`},
        url:`${baseUrl}`,
        data,
    }

    let response = await apiCall(config,dispatch)
    dispatch({
        type: CHANGE_PASSWORD,
        payload: response.data
    })
}

export const logOut = ()=> async dispatch =>{
    const token = localStorage.removeItem("check_token")
    const current_user_id = localStorage.removeItem("current_user_id")

    dispatch({
        type: LOGOUT,
        payload: ''
    })
}


export const removeEmail = (data) => async dispatch=>{
    dispatch({
        type: REMOVE_EMAIL,
        payload:data
    })
}

export const removeForgotPassword =(data)=> async dispatch =>{
    dispatch({
        type: REMOVE_FORGOT_PASSWORD,
        payload: data
    })
}

export const removeOTP = (data)=> async dispatch=>{
    dispatch({
        type: REMOVE_OTP,
        payload:data
    })
}