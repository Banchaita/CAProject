import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashBoard, ForgotPassword, Signup } from "../Viwes";
import { Login } from "../Viwes";







const AppRouter =() =>{
    return(
        <Routes>
            <Route path="/" exact element={<Login/>}/>
            <Route path="/signup" exact element={<Signup/>}/>
            <Route path="/forgotpassword" element={<ForgotPassword/>}/>
            {/* <Route path="/otp" element={<Otp/>}/>
            <Route path="/resetpassword" element={<ResetPassword/>}/>
            <Route path="/changepassword" element={<ChangePassword/>}/> */}
            <Route path="/dashBoard" exact element={<DashBoard/>}/>
        </Routes>
    )
}

export default AppRouter
