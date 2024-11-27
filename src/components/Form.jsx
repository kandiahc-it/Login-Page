import React, { useState } from 'react'
import './Form.css'
import { TextField } from '@mui/material';
import styled from 'styled-components';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useFormik } from 'formik';
import { validationschema, validationschema2 } from './validationschema';
import { toast, ToastContainer } from 'react-toastify';

const CustomTextField = React.memo(styled(TextField)({
  
  '& .MuiInputBase-input': {
    color: '#ffffff', // Set text color to white
    height: '57px',
  },
  '& .MuiInputBase-root': {
    height: '57px', // Apply height to the root input
  },
  '& label': {
    color: '#ffffff', // Set label color to white
  },
  '& label.Mui-focused': {
    color: '#ffffff', // Set label color to white when focused
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#ffffff78', // Set underline color before focus
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#ffffff', // Set underline color after focus
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ffffff', // Set border color
    },
    '&:hover fieldset': {
      borderColor: '#ffffff', // Set border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ffffff', // Set border color when focused
    },
  },
  width:'334px',
}));

const Button=React.memo(styled.button`
   background: linear-gradient(90deg, #3C547C 0%, #6689C0 100%);
  height: 71px;
  width: 271px;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 23px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:20px;
  transition: all 1s ease-in-out;
  margin-top: ${(props) => (props.isLogin === "true" ? "40px" : "0")};

  &:hover{
    opacity:1;
    
    background: linear-gradient(90deg, #6689C0 0%, #3C547C 100%);
  }
  
`);


const Form = () => {

  const[tab,setTab]=useState("Login");
  const handleSubmitform=async (values,actions)=>{
    toast.success("Form Submitted!!");
    
    await new Promise((resolve)=>{
      return setTimeout(resolve, 1000);
    });
    actions.resetForm();
  }
  const formik=useFormik({
    initialValues:{
      LoginUsername:"",
      LoginPassword:"",
      },
    validationSchema:validationschema,
    onSubmit: handleSubmitform,
  })

  const formik2=useFormik({
    initialValues:{
      SigninUserName:"",
      SigninPassword:"",
      SigninCPassword:"",
    },
    validationSchema:validationschema2,
    onSubmit: handleSubmitform,
  })



  return (
    <div className="formcontainer">
      
      <div className='Head'>
        <div className="HeadText" style={{
          transform: tab === "Login" ? "translateY(0%)" : "translateY(-100%)",
        }}>Login</div>
        <div className="HeadText2" style={{
          transform: tab === "SignIn" ? "translateY(0%)" : "translateY(100%)",
        }}>Sign In</div>
      </div>
      <div className='Foot'>
      <form className='loginForm' style={{
        transform: tab === "Login" ? "translateX(0%)" : "translateX(-100%)",
      }} onSubmit={formik.handleSubmit}>
        
        <CustomTextField
          id="standard-basic"
          type="text"
          name="LoginUsername"
          label="UserName"
          variant="standard"
          value={formik.values.LoginUsername}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.LoginUsername && Boolean(formik.errors.LoginUsername)}
          helperText={formik.touched.LoginUsername && formik.errors.LoginUsername}
        />
        <CustomTextField
          id="standard-basic"
          type="password"
          name="LoginPassword"
          label="Password"
          variant="standard"
          value={formik.values.LoginPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.LoginPassword && Boolean(formik.errors.LoginPassword)}
          helperText={formik.touched.LoginPassword && formik.errors.LoginPassword}
        />
        <div className="forgotpassowrd">
          <a href="">Forgot password</a>
        </div>
        <div className="footer">
          <Button isLogin="true" type="submit">
            Login <DoubleArrowIcon />
          </Button>
          <div className="">
            Dont have an account?{" "}
            <a
              href="/signin"
              onClick={(e) => {
                e.preventDefault();
                setTab("SignIn");
              }}
            >
              Sign In
            </a>
          </div>
        </div>
        </form>
      
      <form className='signinForm' style={{
        transform: tab === "SignIn" ? "translateX(0%)" : "translateX(100%)",
      }} onSubmit={formik2.handleSubmit}>
        
        <CustomTextField
          id="standard-basic"
          type="text"
          name="SigninUserName"
          label="UserName"
          variant="standard"
          value={formik2.values.SigninUserName}
          onChange={formik2.handleChange}
          onBlur={formik2.handleBlur}
          error={formik2.touched.SigninUserName && Boolean(formik2.errors.SigninUserName)}
          helperText={formik2.touched.SigninUserName && formik2.errors.SigninUserName}
        />
        <CustomTextField
          id="standard-basic"
          type="password"
          name="SigninPassword"
          label="Password"
          variant="standard"
          value={formik2.values.SigninPassword}
          onChange={formik2.handleChange}
          onBlur={formik2.handleBlur}
          error={formik2.touched.SigninPassword && Boolean(formik2.errors.SigninPassword)}
          helperText={formik2.touched.SigninPassword && formik2.errors.SigninPassword}
        />
        <CustomTextField
          id="standard-basic"
          type="text"
          name="SigninCPassword"
          label="Confirm Password"
          variant="standard"
          value={formik2.values.SigninCPassword}
          onChange={formik2.handleChange}
          onBlur={formik2.handleBlur}
          error={formik2.touched.SigninCPassword && Boolean(formik2.errors.SigninCPassword)}
          helperText={formik2.touched.SigninCPassword && formik2.errors.SigninCPassword}
        />
        <div className="footer">
          <Button isLogin="false" type="submit">
            Signin <LoginOutlinedIcon />
          </Button>
          <div className="">
            Already have an account?{" "}
            <a
              href="/login"
              onClick={(e) => {
                e.preventDefault();
                setTab("Login");
              }}
            >
              Login
            </a>
          </div>
        </div>
        </form>
     
      </div>
    </div>
  );
}

export default Form