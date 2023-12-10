import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Google from '../Google/LoginButton';
import axios from 'axios'
import './Signin.css'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import logo from "../../../assets/logo.png"



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const [passwordToggle, setPasswordToggle] = useState(true)
  const [message, setMessage] = useState(null)
  var { register, reset, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    // Deployed but didn't work :- fatoura-work.netlify.app/auth/login
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, data,
      {
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((res) => {
        setMessage(res.message)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('auth', true)
        reset({ something: '' });
        navigate('/dashboard')
      }).catch(err => {console.log("Error: ", err)})
  }
  const passwordVisiblity = () => {
    passwordToggle ? setPasswordToggle(false) : setPasswordToggle(true)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={6} className="signing-container">
          <Item className="signing-container">
            <Link to="/">
              <img src={logo} className='signin-logo' alt="" />
            </Link>
            <Box className='signin-form-container'>
              <Typography className='signin-heading'>
                Sign In
              </Typography>
              {message !== null && <Typography variant="p" className='error-heading' sx={{color: 'red'}}>
              Invalid password
              </Typography>}
              <form className='signin-form' onSubmit={handleSubmit(onSubmit)}>
                <input type="email" className='signin-form-input' id="outlined-basic" placeholder="Enter email" variant="outlined" {...register("email", { required: true, maxLength: 80 })} />
                {errors.email && <p className='error' style={{ color: 'red', fontSize: 15 }}>Email is required</p>}

                <Box className="signin-password-icon-container">
                  <input type={passwordToggle ? "password" : "text"} className='signin-form-input password' id="outlined-basic" placeholder="Enter password" variant="outlined" {...register("password", { required: true, maxLength: 80 })} />
                  {!passwordToggle ? <VisibilityOffIcon className="password-eye" onClick={passwordVisiblity}/> :
                    <RemoveRedEyeIcon className="password-eye" onClick={passwordVisiblity}/>}
                </Box>
                  {errors.password && <p className='error' style={{ color: 'red', fontSize: 15 }}>Password is required</p>}
                <Link to='/forgot-password' className='forgot-link'>Forgot your password?</Link>
                <button type="submit" className='signin-btn'>Let me in</button>
              </form>
              <Typography variant="h6" className='siginin-with-google'>
                Sign in with Social Media
              </Typography>
              <Google />
              <Typography variant="h6" className='siginin-with-google signup'>
                Let me in? &nbsp;
                <Link to="/auth/register" className='signup-link'>
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6} className="signing-blank">
          <Item className="signing-blank"></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
