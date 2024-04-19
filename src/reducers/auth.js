import { 
    REGISTER_RESPONSE,
    LOGIN_SUCCESS,
    LOGIN_FAILED, 
    LOGOUT,
    VERIFY_OTP,
    VALIDATE_OTP,
    RESEND_OTP,
    FORGOT_PASSWORD,
    CHANGE_PASSWORD,
    VERIFY_EMAIL,
    REMOVE_EMAIL,
    REMOVE_OTP,
    RESET_PASSOWRD
} from "../actions/type";


const initialState ={
    signup_res: null,
    user_data: null,
    is_authenticated: false,
    token:'',
    loginMessage: null,
    otpStatus:null,
    validateOtpStatus: null,
    resendOtpStatus:null,
    forgotPasswordStatus:null,
    changePassword: null,
    emailCheck:null,
    ressetPassword:null,


}

export default (state = initialState,action)=>{
    const {type,payload} = action;

    switch (type){
        case REGISTER_RESPONSE:
            return{
                ...state,
                signup_res: payload,
                user_data: payload.data
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token',payload.data.data.data.token)
            return{
                ...state,
                is_authenticated: true,
                token: payload.token   
            }
        case LOGIN_FAILED:
            return{
                ...state,
            loginMessage: payload.data.message
        }
        case LOGOUT:
            return{
                ...state,
                is_authenticated: false,
                token:''
            }
        case VERIFY_OTP:
            return{
                ...state,
                otpStatus:payload
            }
        case VALIDATE_OTP:
            return{
                ... state,
                validateOtpStatus:payload
            }
        case RESEND_OTP:
            return{
                ...state,
                resendOtpStatus:payload
            }
        case FORGOT_PASSWORD:
            return{
                ...state,
                forgotPasswordStatus: payload.data.status
            }
        case CHANGE_PASSWORD:
            return{
                ...state,
                changePassword:payload
            }
        case RESET_PASSOWRD:
            return{
                ...state,
                ressetPassword:payload
            }
        case VERIFY_EMAIL:
            return{
                ...state,
                emailCheck: payload.data
            }
        case REMOVE_EMAIL:
            return{
                ...state,
                emailCheck:payload
            }
        case REMOVE_OTP:
            return{
                ...state,
                otpStatus:payload
            }
        default:
            return state;
    }
}