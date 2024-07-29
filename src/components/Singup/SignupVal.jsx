import *as Yup from 'yup';
// import React from 'react';
const SignupValidation=Yup.object({
    name:Yup.string().min(5).required("please enter name"),
    email:Yup.string().email("enter valid email").required("enter your email"),
    password:Yup.string().min(5).required("enter your password"),
    confrompassword:Yup.string().oneOf([Yup.ref('password')],"confrompassword not matched").required("please enter confrompassword")

})
export default SignupValidation;