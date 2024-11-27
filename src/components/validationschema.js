import React from 'react'
import * as yup from 'yup'

const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// console.log(passwordPattern.test("Secure1@")); 
export const validationschema = yup.object({
    LoginUsername:yup.string("Enter Your Username").email("Enter Valid Email").required("This Field is required"),
    LoginPassword:yup.string("Enter Your Username").min(8,"The password should  be 8 characters").matches(passwordPattern,"Password must include uppercase, lowercase, number, and special character").required("This Field is required"),
    }) 
export const validationschema2=yup.object({
    SigninUserName:yup.string("Enter Your Username").email("Enter Valid Email").required("This Field is required"),
    SigninPassword:yup.string("Enter Your Username").min(8,"It shoulld be 8 Long").matches(passwordPattern,"Password must include uppercase, lowercase, number, and special character").required("This Field is required"),
    SigninCPassword:yup.string("Enter Your Username").oneOf([yup.ref("SigninPassword"),null],"The Confirm password do not match").required("This Field is required")
})