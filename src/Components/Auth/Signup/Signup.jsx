import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import Google from '../Google/LoginButton';
import logo from "../../../assets/logo.png"
import './Signup.css'
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const [passwordToggle, setPasswordToggle] = useState(true)
  var { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {

    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, data,
      {
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(()=>{
        navigate('/signin')
      })
  }

  const passwordVisiblity = () => {
    passwordToggle ? setPasswordToggle(false) : setPasswordToggle(true)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={6} className="signup-container">
          <Item className="signup-container">
            <Link to="/">
              <img src={logo} className='signup-logo' alt="" />
            </Link>
            <Box className='signup-form-container'>
              <Typography className='signup-heading'>
                Sign Up
              </Typography>
              <form className='signup-form' id="form" onSubmit={handleSubmit(onSubmit)}>
                <Box className='d-flex'>
                  <Box>
                    <input type="text" className='signup-form-input name' id="outlined-basic" placeholder="Enter First Name" variant="outlined" {...register("fname", { required: true, maxLength: 80 })} />
                    {errors.fname && <p className="error" style={{ color: 'red', fontSize: 15, fontWeight: 100 }}>First Name is required</p>}
                  </Box>
                  <Box>
                    <input type="text" className='signup-form-input name' id="outlined-basic" placeholder="Enter Last Name" variant="outlined" {...register("lname", { required: true, maxLength: 80 })} />
                    {errors.lname && <p className="error" >First Name is required</p>}
                  </Box>
                </Box>

                <input type="email" className='signup-form-input password' id="outlined-basic" placeholder="Enter Email" variant="outlined" {...register("email", { required: true, maxLength: 80 })} />
                {errors.email && <p className="error" >Email is required</p>}
                <input type="tel" className='signup-form-input password' id="outlined-basic" placeholder="Enter Phone Number" variant="outlined" {...register("phone", { required: true, maxLength: 10, minLength: 10 })} />
                {errors.phone && <p className="error" >Phone number is required</p>}
                <input type={passwordToggle ? "password" : "text"} className='signup-form-input password' id="outlined-basic" placeholder="Enter password" variant="outlined" {...register("password", { required: true, maxLength: 80 })} />
                {errors.password && <p className="error" >Password is required</p>}
                <input type="text" className='signup-form-input password' id="outlined-basic" placeholder="Referral Code (Optional)" variant="outlined" {...register("referral", {maxLength: 10 })}/>

                <Box className="signup-password-icon-container" onClick={passwordVisiblity}>
                  {/* {!passwordToggle ? <VisibilityOffIcon className="password-eye" /> :
                    <RemoveRedEyeIcon className="password-eye" />} */}
                </Box>
                <button type="submit" className='signup-btn'>Let me in</button>
              </form>
              <Typography variant="h6" className='signin-with-google'>
                or
              </Typography>
              <Google />
              <Typography variant="h6" className='signin-with-google signup'>
                Already a member? &nbsp;
                <Link to="/signin" className='signup-link'>
                  Sign in
                </Link>
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6} className="signup-blank">
          <Item className="signup-blank"></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
